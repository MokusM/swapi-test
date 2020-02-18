import endpoints from "./endpoints";
import request from "./request";

class APIClient {
  constructor() {
    this.endpoints = endpoints;
    this.request = request;
  }

  async getFilms({ title } = {}) {
    const params = {
      search: title
    };

    const { data } = await this.request({
      method: "get",
      url: this.endpoints.films(),
      params
    });
    return data.results;
  }

  async getFilm(id) {
    const { data } = await this.request({
      method: "get",
      url: this.endpoints.film(id)
    });
    return data;
  }

  async getActors({ title } = {}) {
    const params = {
      search: title
    };

    const { data } = await this.request({
      method: "get",
      url: this.endpoints.actors(),
      params
    });
    return data.results;
  }

  async getActor(id) {
    const { data } = await this.request({
      method: "get",
      url: this.endpoints.actor(id)
    });
    return data;
  }

  async getShips({ title } = {}) {
    const params = {
      search: title
    };

    const { data } = await this.request({
      method: "get",
      url: this.endpoints.ships(),
      params
    });

    return data.results;
  }

  async getShip(id) {
    const { data } = await this.request({
      method: "get",
      url: this.endpoints.ship(id)
    });
    return data;
  }
}

export default new APIClient();
