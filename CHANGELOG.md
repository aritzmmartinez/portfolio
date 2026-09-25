# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2026-09-25

### Added

- Docker Hub icon on the Quoin card, linking to the published image
- ESLint flat config extending next/core-web-vitals and next/typescript, so the lint script finally runs

### Changed

- pnpm replaces npm as the package manager, pinned via the packageManager field

## [1.2.0] - 2026-09-17

### Added

- Quoin project card (open-source, local-first investment tracker)
- libtraderepublic project card (first published npm package)
- library project type, with its own snippet mockup instead of the browser chrome
- npm icon linking to the package on library cards, replacing the text link
- Masonry layout for the projects grid, so cards of different heights pack without leaving gaps
- Tooltip with the full description on cards whose text is clipped, on hover and keyboard focus

### Changed

- Featured projects are signalled by size — double width for web cards, a larger phone for mobile ones — instead of by grid spans
- GitHub icon now dims on hover like the rest of the card actions

### Fixed

- Browser mockup no longer guesses a live URL for projects without a public demo
- Spanish project descriptions no longer fall back to their translation key

## [1.1.0] - 2026-05-20

### Changed

- Experience entries now use detailed prose descriptions instead of bullet points (EN + ES)
- About bio rewritten for consistency (EN + ES)

### Fixed

- Hero roles now correctly translated to Spanish
- Phone mockup status bar display

## [1.0.0] - 2026-05-03

### Added

- Initial portfolio release
- Bilingual support (EN / ES) via i18next
- Dark / light theme with next-themes
- Sections: Hero, About, Experience, Tech Stack, Projects, Contact
- Contact form via EmailJS
- Project cards with browser and phone mockups
- Infinite tech stack carousel
- Responsive design

[unreleased]: https://github.com/aritzmmartinez/portfolio/compare/v1.3.0...HEAD
[1.3.0]: https://github.com/aritzmmartinez/portfolio/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/aritzmmartinez/portfolio/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/aritzmmartinez/portfolio/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/aritzmmartinez/portfolio/releases/tag/v1.0.0