import { describe, expect, test } from "bun:test";

import getRepoName from "@/utils/getRepoName"; // adjust path as needed

describe("getRepoName", () => {
    test("extracts repo name from standard GitHub HTTPS URL", () => {
        const url = "https://github.com/username/my-repo";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("extracts repo name from GitHub URL with .git extension", () => {
        const url = "https://github.com/username/my-repo.git";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("extracts repo name from GitHub SSH URL", () => {
        const url = "git@github.com:username/my-repo.git";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("extracts repo name from GitLab URL", () => {
        const url = "https://gitlab.com/username/my-repo";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("extracts repo name from GitLab URL with .git", () => {
        const url = "https://gitlab.com/username/my-repo.git";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("extracts repo name from Bitbucket URL", () => {
        const url = "https://bitbucket.org/username/my-repo";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("handles repo names with hyphens", () => {
        const url = "https://github.com/username/my-awesome-repo";
        expect(getRepoName(url)).toBe("my-awesome-repo");
    });

    test("handles repo names with underscores", () => {
        const url = "https://github.com/username/my_repo_name";
        expect(getRepoName(url)).toBe("my_repo_name");
    });

    test("handles repo names with dots (not .git)", () => {
        const url = "https://github.com/username/my.repo.name";
        expect(getRepoName(url)).toBe("my.repo.name");
    });

    test("returns default 'worldwise' for invalid URL", () => {
        const url = "not-a-valid-url";
        expect(getRepoName(url)).toBe("worldwise");
    });

    test("returns default 'worldwise' for empty string", () => {
        const url = "";
        expect(getRepoName(url)).toBe("worldwise");
    });

    test("returns default 'worldwise' for URL with incorrect path structure (too few parts)", () => {
        const url = "https://github.com/username";
        expect(getRepoName(url)).toBe("worldwise");
    });

    test("returns default 'worldwise' for URL with incorrect path structure (too many parts)", () => {
        const url =
            "https://github.com/username/my-repo/tree/main/src/index.js";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("returns default 'worldwise' for URL with only domain", () => {
        const url = "https://github.com";
        expect(getRepoName(url)).toBe("worldwise");
    });

    test("returns default 'worldwise' for URL with trailing slash only", () => {
        const url = "https://github.com/";
        expect(getRepoName(url)).toBe("worldwise");
    });

    test("handles URL with trailing slash", () => {
        const url = "https://github.com/username/my-repo/";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("handles self-hosted Git URLs", () => {
        const url = "https://git.company.com/username/my-repo.git";
        expect(getRepoName(url)).toBe("my-repo");
    });

    test("handles repo name that is just 'git' without extension", () => {
        const url = "https://github.com/username/git";
        expect(getRepoName(url)).toBe("git");
    });

    test("only removes .git extension, not .git in middle of name", () => {
        const url = "https://github.com/username/my.git.repo";
        expect(getRepoName(url)).toBe("my.git.repo");
    });
});
