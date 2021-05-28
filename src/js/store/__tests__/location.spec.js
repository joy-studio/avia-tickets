import locationsInstance, { Locations } from "../locations";
import { formatDate } from "../../helpers/date";
import api, { Api } from "../../services/apiService";

const countries = [{ code: "UKR", name: "Ukraine" }];
const cities = [{ countrie_code: "UKR", city_name: "Kharkiv", code: "KH" }];

describe("Locations store test", () => {
  beforeEach(() => {
    locationsInstance.countries =
      locationsInstance.serializeCountries(countries);
  });
  it("Chack that locationInstance is nstance of Lovation class", () => {
    expect(locationsInstance).toBeInstanceOf(Locations);
  });
  it("Success Location instance create", () => {
    const instance = new Locations(api, { formatDate });
    expect(instance.countries).toBe(null);
    expect(instance.formatDate).toEqual(formatDate);
  });
  it("Check correct countries serialize", () => {
    const red = locationsInstance.serializeCountries(countries);
    const expectedData = {
      UKR: { code: "UKR", name: "Ukraine" },
    };
    expect(res).toEqual(expectedData);
  });
  it("Check countries serialize is incorrect data", () => {
    const red = locationsInstance.serializeCountries(null);
    const expectedData = {};
    expect(res).toEqual(expectedData);
  });
  it("Check correct cities serialize", () => {
    const red = locationsInstance.serializeCities(cities);
    const expectedData = {
      KH: {
        countrie_code: "UKR",
        city_name: "Kharkiv",
        code: "KH",
        countrie_name: "Ukraine",
        full_name: "Kharkiv,Ukraine",
      },
    };
    expect(res).toEqual(expectedData);
  });
});
