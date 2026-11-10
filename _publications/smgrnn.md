---
title: "Self-motivated growing neural network for adaptive architecture via local structural plasticity"
short: "Self-motivated growing neural networks"
rank: 1
venue: Neurocomputing
year: 2026
authors: "Yiyang Jia and Chengxu Zhou"
citation: "Volume 702, article 134581"
bibtex: |
  @article{jia2026smgrnn,
    author  = {Jia, Yiyang and Zhou, Chengxu},
    title   = {Self-motivated growing neural network for adaptive architecture via local structural plasticity},
    journal = {Neurocomputing},
    year    = {2026},
    volume  = {702},
    pages   = {134581},
    doi     = {10.1016/j.neucom.2026.134581}
  }
image: /images/smgrnn.png
alt: "Overview of the controller and its structural plasticity module."
preview:
  src: /images/smgrnn-lander.mp4
  poster: /images/smgrnn-lander.jpg
  alt: "Episode 999: a LunarLander descent alongside the controller's changing neuron activations."
  labels: [LunarLander, Network activity]
summary: "Instead of fixing the size of a neural controller before training, local rules let it grow and prune neurons as it learns."
links:
  - {label: Journal article, url: "https://doi.org/10.1016/j.neucom.2026.134581"}
  - {label: arXiv, url: "https://arxiv.org/abs/2512.12713"}
  - {label: "Video (LinkedIn)", url: "https://www.linkedin.com/posts/yiyang-jia-61379b315_braininspiredai-neuralnetworks-robotics-activity-7411423004108451840-ELFZ"}
---
We asked whether a controller could adjust its own capacity during training. SMGrNN combines gradient-based learning with a structural plasticity module: the network changes not only its weights, but also which neurons are present.

We compared adaptive and fixed networks on control benchmarks, and examined what changed when growth or pruning was switched off. This work concerns adaptation **within a task**; retaining skills across tasks is a question in my current research.
