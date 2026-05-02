export const partnerNames = {
  default: "Aliados 360",
  updated: "Aliados 360 Updated",
  another: "Partner Secundario",
};

export const createPartnerData = {
  validRequest: {
    name: partnerNames.default,
  },
  anotherValidRequest: {
    name: partnerNames.another,
  },
  invalidRequests: {
    emptyName: {
      name: "",
    },
    blankName: {
      name: "   ",
    },
    nullName: {
      name: null as any,
    },
    undefinedName: {
      name: undefined as any,
    },
  },
};

export const getPartnerByIdData = {
  existingPartner: {
    id: "1a2b3c4d-0001",
    expectedName: "Tech Solutions S.A.S", 
  },
  nonExistingId: "non-existing-id-999999"
};

export const getAllPartnersData = {
  expectedFields: ["id", "name", "active"],
};

export const updatePartnerData = {
  targetId: "1a2b3c4d-0002",
  validRequests: {
    updateName: {
      name: partnerNames.updated,
    },
    updateActive: {
      active: false,
    },
    updateNameAndActive: {
      name: partnerNames.updated,
      active: false,
    },
    updateWithEmptyBody: {},
  },
  invalidRequests: {
    invalidId: "non-existing-id-999999",
    nonExistingId: "1a2b3c4d-9999",
    emptyName: {
      name: "",
    },
    blankName: {
      name: "   ",
    },
    shortName: {
      name: "ab",
    },
    invalidNameType: {
      name: 123 as any,
    },
    invalidActiveType: {
      active: "true" as any,
    },
  },
};
