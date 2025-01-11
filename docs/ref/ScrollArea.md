[View composites](../index.md)

# ScrollArea

> View composite with an area that contains scrolling content.

<pre class="docgen_signature"><b>const</b> ScrollArea: ViewComposite.DefinedViewComposite&lt;{<br>    cellStyle?: BindingOrValue&lt;UICell.StyleValue&gt;;<br>    height?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    width?: BindingOrValue&lt;<b>string</b> | <b>number</b> | <b>undefined</b>&gt;;<br>    name?: BindingOrValue&lt;<b>string</b>&gt; | <b>undefined</b>;<br>}, {<br>    cellStyle: UICell.StyleValue | <b>undefined</b>;<br>    height: <b>number</b> | <b>string</b> | <b>undefined</b>;<br>    width: <b>number</b> | <b>string</b> | <b>undefined</b>;<br>    name: <b>string</b>;<br>}&gt;;</pre>

## Description

A scroll area composite provides a way to constrain content to a containing cell, allowing the user to scroll content up and down.

> **Note**\
> For scrolling left and right, you can use a [ScrollRow](ScrollRow.md) instead.

## Instance members

- [<!--{ref:property}-->cellStyle](ScrollArea_cellStyle.md) \
    Cell style for the outer container.
- [<!--{ref:property}-->height](ScrollArea_height.md) \
    Height of the outer container.
- [<!--{ref:property}-->width](ScrollArea_width.md) \
    Width of the outer container.
- [<!--{ref:property}-->name](ScrollArea_name.md) \
    UI component name.