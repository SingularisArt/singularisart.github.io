---
title: "Lecture 1: Linear Systems"
draft: false
comments: false
latex: true
---

# Lecture 1: Linear Systems

<ul>
  <li style="list-style-type: none;"><a href="/notes/mth-261/lec-01/01">1.1 Introduction to Linear Systems</a></li>
  <li style="list-style-type: none;"><a href="/notes/mth-261/lec-01/02">1.2 Basic Algebra Review</a></li>
  <li style="list-style-type: none;"><a href="/notes/mth-261/lec-01/03">1.3 Introduction to Matrices</a></li>
  <li style="list-style-type: none;"><a href="/notes/mth-261/lec-01/04">1.4 Solving Linear Systems with Row Operations</a></li>
</ul>

{{< definition name="Linear Equation" counter="1" >}}
  <div>
    A \(\textbf{linear equation}\) in the variables \(x_1, x_2, \dots, x_n\) is
    an equation that can be written in the form \(c_1x_1 + c_2x_2 + \dots +
    c_nx_n = k\), where \(n \in \R\) and \(k, c_1, c_2, \dots, c_n \in \R \cup
    \mathbb{C}\).
  </div>
{{< /definition >}}

{{< example >}}
  Below are some examples of linear equations.

  \begin{multicols}{2}\noindent
    \begin{enumerate}
      \label{enum:linear_equation_1}

      \item $4.6x_1 + 2x_2 - 5x_3 - x_4 = 1.2$
      \item $x_2 = 2(\sqrt{6} - x_1) + x_3$
      \columnbreak
      \item $9x_1 - 5x_2 + 2 = x_2$
      \item $x_1 - x_3 + 4x_5 = 1$
    \end{enumerate}
  \end{multicols}

  Here are some equations that aren't linear.

  \begin{multicols}{2}\noindent
    \begin{enumerate}
      \label{enum:non_linear_equation_1}

      \item $\incorrect{x_1 \cdot x_2} = 5 + x_1$.
      \item $\incorrect{\sfrac{x_2}{x_1}} + x_3 = 30$.

      \item $\incorrect{x_1^2} + 8x_3 = x_1$
      \item $\incorrect{\sqrt{x_1}} + x_2 = 120$
    \end{enumerate}
  \end{multicols}
{{< /example >}}

{{< question counter="1" >}}
Hi
{{< /question >}}

{{< solution counter="1" >}}
  A \(\textbf{solution}\) of a linear system is a list \(\left\{s_1, s_2,
  \dots, s_n\right\}\) of numbers that makes each equation a true statement
  when the values of \(s_1, \dots, s_n\) are substituted for \(x_1, \dots,
  x_n\).

  <br />

  The set of all possible solutions is called the \textbf{solution set} of the
  linear system. Two linear systems are called \textbf{equivalent} if they have
  the same solution set. That is, \(\forall x \in S_1, x \in S_2\), where
  \(S_1\) and \(S_2\) are solution sets of two linear systems. <div
  class="sol-qed"></div>
{{< /solution >}}

{{< endNote prevNoteDisplay="Introduction" prevNoteLink="/introduction/" nextNoteDisplay="Section 1.1" nextNoteLink="/lec-01/01/" >}}
