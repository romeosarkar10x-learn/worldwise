import gh from "parse-github-url";

export default function getRepoName(repositoryURL: string) {
    const githubURL = gh(repositoryURL);

    if (githubURL == null || githubURL.name == null) {
        return "worldwise";
    }

    return githubURL.name;
}
