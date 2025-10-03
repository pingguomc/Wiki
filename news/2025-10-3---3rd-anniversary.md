# 啊啊啊

试试卡

用 authors 插件选项配置 YAML authors 文件的路径。

按照惯例，插件将在博客内容文件夹的根目录中查找文件。authors.yml

<!--truncate-->

此文件可以包含预定义的全局博客作者列表。由于作者的前言，您可以通过 Markdown 文件中的键引用这些作者。

类型
提供的作者文件的 YAML 内容应遵循以下形状：

type AuthorsMapInput = 

};

type AuthorInput =
name? s: string;
descrirInput =tion?: sting;
imageURaututhor
示例Input =
name? stionholetring;string;
title?
name? stion?: sting;
imageURaInput =
name? stion?: sting;
imageUp?: sting;
imageUputhor
tags.yml