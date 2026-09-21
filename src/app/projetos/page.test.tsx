import projetos from "./page";
import { render, screen } from "@testing-library/react";


jest.mock("@octokit/core")

describe("Projetos", () => {

    it("renders the page title", async () => {
        render(await projetos());
        const titleElement = screen.getByText("Projetos");
        expect(titleElement).toBeInTheDocument();
    });

    it("renders the project list", async () => {
        render(await projetos());
        
    });
});