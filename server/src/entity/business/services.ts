import { Business, BusinessModel } from './model';

export async function createBusiness(business: Business) {
  const responseBusiness = BusinessModel.create(business);
  if (!responseBusiness) {
    throw new Error(`Business with cuit ${business.cuit} already exists`);
  }
  return responseBusiness;
}

export async function getBusinessList() {
  return BusinessModel.find({});
}

export async function getBusiness(id: String) {
  const responseBusiness = await BusinessModel.findOne({ _id: id });
  if (!responseBusiness) {
    throw new Error(`Business ${id} not found`);
  }
  return responseBusiness;
}

export async function updateBusiness(id: string, data: Business) {
  const responseBusiness = await BusinessModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseBusiness;
}

export async function deleteBusiness(id: string) {
  const responseBusiness = await BusinessModel.deleteOne({ _id: id });
  if (!responseBusiness.deletedCount) {
    throw new Error(`Product ${id} not found`);
  }
  return responseBusiness;
}
