---
title: "Self-motivated growing neural network for adaptive architecture via local structural plasticity"
short: "Self-motivated growing neural networks"
rank: 1
venue: Neurocomputing
year: 2026
authors: "Yiyang Jia and Chengxu Zhou"
citation: "Volume 702, article 134581"
image: /images/smgrnn.png
alt: "Overview of the controller and its structural plasticity module."
summary: "Instead of fixing the size of a neural controller before training, local rules let it grow and prune neurons as it learns."
links:
  - {label: Journal article, url: "https://doi.org/10.1016/j.neucom.2026.134581"}
  - {label: arXiv, url: "https://arxiv.org/abs/2512.12713"}
---
We asked whether a controller could adjust its own capacity during training. SMGrNN combines gradient-based learning with a structural plasticity module: the network changes not only its weights, but also which neurons are present.

We compared adaptive and fixed networks on control benchmarks, and examined what changed when growth or pruning was switched off. This work concerns adaptation **within a task**; retaining skills across tasks is a question in my current research.
