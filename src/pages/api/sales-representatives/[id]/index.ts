import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { salesRepresentativeValidationSchema } from 'validationSchema/sales-representatives';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.sales_representative
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getSalesRepresentativeById();
    case 'PUT':
      return updateSalesRepresentativeById();
    case 'DELETE':
      return deleteSalesRepresentativeById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getSalesRepresentativeById() {
    const data = await prisma.sales_representative.findFirst(
      convertQueryToPrismaUtil(req.query, 'sales_representative'),
    );
    return res.status(200).json(data);
  }

  async function updateSalesRepresentativeById() {
    await salesRepresentativeValidationSchema.validate(req.body);
    const data = await prisma.sales_representative.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteSalesRepresentativeById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.sales_representative.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
