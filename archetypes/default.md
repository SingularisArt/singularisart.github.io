---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
toc: true
comments: true
prevFile: "/{{ .File.Dir }}"
nextFile: "/{{ .File.Dir }}"
introFile: "/{{ .File.Dir }}post-00"
---

{{< header "{{ replace .Name "-" " " | title }}" >}}
{{< intro part="one" length="one-part" topic="description" >}}
{{< navbar >}}
{{< toc >}}

{{< navbar >}}
