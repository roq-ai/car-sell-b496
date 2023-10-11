import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { dealershipValidationSchema } from 'validationSchema/dealerships';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';
import omit from 'lodash/omit';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req);
  if (!session) {
    if (req.method === 'GET') {
      return getDealershipsPublic();
    }
    return res.status(403).json({ message: `Forbidden` });
  }
  const { roqUserId, user } = session;
  switch (req.method) {
    case 'GET':
      return getDealerships();
    case 'POST':
      return createDealership();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getDealershipsPublic() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const findOptions = convertQueryToPrismaUtil(query, 'dealership');
    const countOptions = omit(findOptions, 'include');
    const [totalCount, data] = await prisma.$transaction([
      prisma.dealership.count(countOptions as unknown),
      prisma.dealership.findMany({
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
        ...findOptions,
      }),
    ]);
    return res.status(200).json({ totalCount, data });
  }

  async function getDealerships() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.dealership
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'dealership'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createDealership() {
    await dealershipValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.car?.length > 0) {
      const create_car = body.car;
      body.car = {
        create: create_car,
      };
    } else {
      delete body.car;
    }
    if (body?.purchase?.length > 0) {
      const create_purchase = body.purchase;
      body.purchase = {
        create: create_purchase,
      };
    } else {
      delete body.purchase;
    }
    if (body?.sales_manager?.length > 0) {
      const create_sales_manager = body.sales_manager;
      body.sales_manager = {
        create: create_sales_manager,
      };
    } else {
      delete body.sales_manager;
    }
    if (body?.sales_representative?.length > 0) {
      const create_sales_representative = body.sales_representative;
      body.sales_representative = {
        create: create_sales_representative,
      };
    } else {
      delete body.sales_representative;
    }
    const data = await prisma.dealership.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
