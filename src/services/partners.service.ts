import { APIRequestContext, APIResponse } from "@playwright/test";

export class PartnersService {
  constructor(private request: APIRequestContext) {}

  async createPartner(data: { name: string }) {
    const response = await this.request.post("/partners", { data });
    return this.parseResponse(response);
  }

  async getAllPartners() {
    const response = await this.request.get("/get/partners");
    return this.parseResponse(response);
  }

  async getPartnerById(id: string) {
    const response = await this.request.get(`/getbyid/partners/${id}`);
    return this.parseResponse(response);
  }

  async updatePartner(id: string, data: { name?: string; active?: boolean }) {
    const response = await this.request.put(`/update/partners/${id}`, {
      data,
    });
    return this.parseResponse(response);
  }

  private async parseResponse(response: APIResponse) {
    let body = null;

    try {
      body = await response.json();
    } catch {
      // puede no haber body
    }

    return {
      status: response.status(),
      body,
    };
  }
}
