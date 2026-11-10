---
title: "ForesightSafety-VLA: A Unified Diagnostic Safety Benchmark for Vision-Language-Action Models"
short: "ForesightSafety-VLA"
rank: 2
venue: IROS
year: 2026
authors: "Mingyang Lyu, Yinqian Sun, Yiyang Jia, Sicheng Shen, Moquan Sha, Huangrui Li, Feifei Zhao and Yi Zeng"
short_authors: "Mingyang Lyu, Yinqian Sun, Yiyang Jia, et al."
citation: "IEEE/RSJ International Conference on Intelligent Robots and Systems"
bibtex: |
  @inproceedings{lyu2026foresightsafety,
    author        = {Lyu, Mingyang and Sun, Yinqian and Jia, Yiyang and Shen, Sicheng and Sha, Moquan and Li, Huangrui and Zhao, Feifei and Zeng, Yi},
    title         = {{ForesightSafety-VLA}: A Unified Diagnostic Safety Benchmark for Vision-Language-Action Models},
    booktitle     = {2026 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
    year          = {2026},
    eprint        = {2606.27079},
    archivePrefix = {arXiv}
  }
image: /images/foresight.gif
alt: "Simulation replay of a robot completing a task while safety monitors track risk during execution."
summary: "A robot can finish a task and still act unsafely. This benchmark measures what happens along the way across 66 simulated scenarios."
links:
  - {label: Paper, url: "https://arxiv.org/abs/2606.27079"}
  - {label: Code and demos, url: "https://github.com/tuotuoLyu/ForesightSafety-VLA"}
---
We evaluated vision-language-action policies under changes to the scene, the instruction and what the robot sees. The benchmark records both cumulative safety cost and time exposed to risk, distinguishing successful runs that stayed safe from those that did not.

The replay above comes from the project's public demonstrations: task completion alone does not tell you whether the robot crossed a safety boundary during the movement.
