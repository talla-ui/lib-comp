[View composites](../index.md)

# FormSection

> View composite for a form section.

<pre class="docgen_signature"><b>const</b> FormSection: ViewComposite.DefinedViewComposite&lt;{<br>    title?: BindingOrValue&lt;StringConvertible | <b>undefined</b>&gt;;<br>    rowTitleAfter?: BindingOrValue&lt;<b>boolean</b>&gt; | <b>undefined</b>;<br>    styles?: ConfigOptions.Arg&lt;<a href="ColumnCardStyles.md">ColumnCardStyles</a>&gt; | <b>undefined</b>;<br>}, {<br>    title: StringConvertible | <b>undefined</b>;<br>    rowTitleAfter: <b>boolean</b>;<br>    styles: <a href="ColumnCardStyles.md">ColumnCardStyles</a>;<br>}&gt;;</pre>

## Description

A form section displays a visual grouping of a form field set (i.e. a [ColumnCard](ColumnCard.md) with one or more content areas) along with a description that appears either at the top or on the side — depending on the current viewport width.

On narrow viewports, a title and description is displayed above the field set card; on wider viewports (4 columns and above), these are displayed in a column to the left or right of the field set card.

**Content**
- If a title is specified as a property, it is displayed in the title area;
- If a [FormSectionDescription](FormSectionDescription.md) is preset as content of the form section, it is displayed in the title area instead.
- Any other content is added to the [ColumnCard](ColumnCard.md), separated using a horizontal divider. Containers and view composites do not receive any padding, but individual input components do.

## Instance members

- [<!--{ref:property}-->title](FormSection_title.md) \
    The title of the form section, if not using a [FormSectionDescription](FormSectionDescription.md).
- [<!--{ref:property}-->rowTitleAfter](FormSection_rowTitleAfter.md) \
    True if the title should appear on the opposite side (i.e. right, on LTR locales) on wide viewports.
- [<!--{ref:property}-->styles](FormSection_styles.md) \
    Column card styles, an instance of [ColumnCardStyles](ColumnCardStyles.md), removes the cell shadow by default.

## Related

- [<!--{ref:class}-->class FormSectionDescription](FormSectionDescription.md) \
    View composite that can be used as a part of a [FormSection](FormSection.md).