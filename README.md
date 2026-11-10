# Yiyang Jia's academic website

A separate Jekyll site based on [Academic Pages](https://github.com/academicpages/academicpages.github.io). The GitHub profile README lives in a different repository.

The live site is [ethanjia0627.github.io](https://ethanjia0627.github.io/). Pushing to `main` builds and deploys the site with GitHub Pages. To preview locally with Ruby 3.4, run `bundle install` and `bundle exec jekyll serve`. Edit `index.html` for the research introduction and add Markdown records to `_publications/` for papers. The same records populate the home page and publication list.

The profile image is from Yiyang's public GitHub account. The SMGrNN figure is from the authors' [paper](https://arxiv.org/abs/2512.12713). The risk replay is from the [official ForesightSafety-VLA repository](https://github.com/tuotuoLyu/ForesightSafety-VLA/blob/main/assets/readme/process_risk.gif). The Academic Pages template license is retained in LICENSE.

The SMGrNN homepage clip pairs the recorded rollout and step-level network activity from LunarLander episode 999 (run `20251223_090354`). It shows steps 30 through 359 at 1.5x speed; the environment recording has one extra initial reset frame. The publication page retains the architecture figure and the full narrated video link.

The public CV lives in `cv.html`. Its publication lists use the same records as the site. After content changes, print the served `/cv/` page to A4 PDF with browser headers and footers off, and replace `files/yiyang-jia-academic-cv.pdf`. Use the dedicated print stylesheet; do not attach a private application CV. BibTeX entries live in each publication's front matter.
