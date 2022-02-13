import { shallow } from "enzyme";
import App from "./App";


test("renders learn react link", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find("h1").text()).toContain("Hello World!");
});
