# ShowMeCoders

[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/ShowMeCoders/showmecoders)


[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/ShowMeCoders/showmecoders) <a href="https://zenhub.com"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

ShowMeCoders is a platform which allows Missouri participants in the Grow With
Google Challenge to share information about themselves - background, education,
military services, interests & hobbies, and the story of their journey as a Web
Developer. In addition, each participant can also choose to share links to the
resources they've found to be inspiring, useful, or just plain interesting.

This app has been developed by a group of Missouri-based students in the
[Front End Web Development](https://classroom.udacity.com/courses/ud304-gwg)
track of the Grow With Google Challenge Scholarship. It's primary purpose is
to allow the development team to showcase the skills they've acquired in the
Grow With Google Challenge.

You can find ShowMeCoders at [https://showmecoders.github.io/showmecoders/](https://showmecoders.github.io/showmecoders/).

[Features](#features) | [Development](#development) | [Runtime](#runtime) | [Authors](#authors) |
[License](#license)

## Features

- The Home page is dynamically populated from GitHub using the [GitHub API V3](https://developer.github.com/v3/)
- Developer pages are accessed by clicking on the developers avatar on the
Home page.
- Developers have each created their own pages to showcase their unique
history and interests. 

## Development

### Git Branches

- `master`: Only updated from PR's from the `development` branch for release. This
branch always reflects the current production release.
- `development`: Reflects the candidate code for the next release. Developers
work in working branches, which are then pulled into this branch. All code
pulled into this branch must be tested and undergo peer review as part of the
PR process.
- `working branches`: Are individual branches created by each developer when
they are working on changes and bug fixes. There are 4 basic types of branches: 
bug, feature, refactor and style, after the type comes the name, it should 
specify on top of the branch type. For example feature/course-review.

## Runtime

### Deployment Steps

This app is hosted on GitHub Pages. The applications is published to GitHub
Pages by pushing the contents of the `master` branch to the `gh-pages`
branch.

## Authors

Developers on this project can be found on the [Contributors](https://github.com/ShowMeCoders/showmecoders/graphs/contributors) page of this
repo.

## License

[MIT](https://tldrlegal.com/license/mit-license)
