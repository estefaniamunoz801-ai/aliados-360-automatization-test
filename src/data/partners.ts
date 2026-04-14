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
      name: null as unknown as string,
    },
    undefinedName: {
      name: undefined as unknown as string,
    },
  },
};

export const getPartnerByIdData = {
  nonExistingRequest: {
    id: "non-existing-id-999999",
  },
};

export const updatePartnerData = {
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
  },
  invalidRequests: {
    emptyBody: {},
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
      name: 123 as unknown as string,
    },
    invalidActiveType: {
      active: "true" as unknown as boolean,
    },
  },
};
