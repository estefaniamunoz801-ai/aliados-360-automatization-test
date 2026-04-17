import { test, expect, APIResponse } from '@playwright/test';
import { PartnersService } from '../../../services/partners.service';
import { getAllPartnersData } from '../../../data/partners';

test.describe("Create Partner", async () => {
  let partnersService: PartnersService;

  test.beforeEach(async ({ request }) => {
    partnersService = new PartnersService(request);
  });

  // SUCCESS SCENARIOS
  //test to get a list of all partners
  test("should get a list of all partners", async () => {
    const response = await test.step("send a GET request to get all partners", async () => {
      return await partnersService.getAllPartners();
    });

    await test.step("validate HTTP status code", async () => {
      expect(response.status).toBe(200);
    });

    await test.step("validate response is a non-empty array", async () => {
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });

    await test.step("validate structure of the response body", async () => {
        const expectedFields = getAllPartnersData.expectedFields;
        response.body.forEach((partner: any) => {
          expectedFields.forEach((field) => {expect(partner).toHaveProperty(field);});
        });
    });
    
  });


});