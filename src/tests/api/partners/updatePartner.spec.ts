import { test, expect, APIResponse } from '@playwright/test';
import { PartnersService } from '../../../services/partners.service';
import { updatePartnerData } from '../../../data/partners';

test.describe("Update Partner", () => {
  let partnersService: PartnersService;

  test.beforeEach(async ({ request }) => {
    partnersService = new PartnersService(request);
  });

  // SUCCESS SCENARIOS
  //test to update only the name of a partner with valid data
  test("should update only the name of a partner with valid data", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.validRequests.updateName;

    const response = await test.step("send a PATCH request to update only the name", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(204);
    });

   });

   //test to update only the active status of a partner with valid data
   test("should update only the active status of a partner with valid data", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.validRequests.updateActive;

    const response = await test.step("send a PATCH request to update only the active status", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(204);
    });

   });

   //test to update both the name and active status of a partner with valid data
   test("should update both the name and active status of a partner with valid data", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.validRequests.updateNameAndActive;

    const response = await test.step("send a PATCH request to update both the name and active status", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(204);
    });

   });

  // FAILURE SCENARIOS
  //test to update a partner with a non-existing id
  test("should not update a partner with a non-existing id", async () => {
    const nonExistingId = updatePartnerData.invalidRequests.nonExistingId;
    const requestData = updatePartnerData.validRequests.updateName;

    const response = await test.step("send a PATCH request to update a partner with a non-existing id", async () => {
      return await partnersService.updatePartner(nonExistingId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(404);
      expect(response.body.message).toContain("Partner not found");
    });

  });

  //test to update a partner with an empty body
  test("should not update a partner with an empty body", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.invalidRequests.emptyBody;

    const response = await test.step("send a PATCH request to update a partner with an empty body", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
      expect(response.body.message).toContain("At least one field must be provided to update");
    });

  });

  //test to update a partner with an empty name
  test("should not update a partner with an empty name", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.invalidRequests.emptyName;

    const response = await test.step("send a PATCH request to update a partner with an empty name", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
      expect(response.body.message).toContain("Name cannot be empty");
    });

  });

  //test to update a partner with a only spaces name (blank name)
  test("should not update a partner with a only spaces name", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.invalidRequests.blankName;

    const response = await test.step("send a PATCH request to update a partner with a only spaces name", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
      expect(response.body.message).toContain("Name cannot be empty");
    });

  });

  //test to update a partner with a ivalid name (too short)
  test("should not update a partner with a ivalid name", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.invalidRequests.shortName;

    const response = await test.step("send a PATCH request to update a partner with a ivalid name", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
      expect(response.body.message).toContain("Name must be at least 3 characters");
    });

  });

  //test to update a partner with a invalid name type
  test("should not update a partner with a invalid name type", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.invalidRequests.invalidNameType;

    const response = await test.step("send a PATCH request to update a partner with a invalid name type", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
      expect(response.body.message).toContain("Name must be a string");
    });

  });

  //test to update a partner with a invalid active type
  test("should not update a partner with a invalid active type", async () => {
    const targetId = updatePartnerData.targetId;
    const requestData = updatePartnerData.invalidRequests.invalidActiveType;

    const response = await test.step("send a PATCH request to update a partner with a invalid active type", async () => {
      return await partnersService.updatePartner(targetId, requestData);
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(400);
      expect(response.body.message).toContain("Active must be a boolean");
    });

  });

});