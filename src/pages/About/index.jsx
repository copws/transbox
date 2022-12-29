import React from 'react'

export default function About() {
  return (
    <div>
        <h1>Intro | 简介</h1> 
        <p>
            这里是 TransBox 的简介界面。TransBox 是一个简洁的多语言翻译工具，使用必应翻译 API。<br/>
            选择目标语言并输入待翻译的文字之后，按下 Enter 即可完成翻译。<br/>
            TransBox 使用 React 实现。它是作者在 React 学习过程中开发的一个小应用。<br/>
            TransBox 目前还在测试版阶段，欢迎你报告 Bug 或是提出建议。<br/>
            项目 GitHub: <a rel="noreferrer" href="https://github.com/copws/transbox" target="_blank">transbox</a><br/>
            作者：<a rel="noreferrer" href="https://blog.csdn.net/raspi_fans" target="_blank">copcin</a>
        </p>
        <h1>Translation API | 翻译 API</h1>
        <p>
            如果你想了解我们使用的 API，可以参阅这一部分。如果它侵犯了您的权利，请联系删除。<br/>
            Transbox 使用了<a rel="noreferrer" href="https://www.cnblogs.com/fanyang1/p/9414088.html" target="_blank">该博客</a>
            提供的必应翻译 API。具体翻译选项如下：<br/>
            <p>http://api.microsofttranslator.com/v2/Http.svc/Translate?appId=AFC76A66CF4F434ED080D245C30CF1E71C22959C&from=transSrc&to=transTo&text=event.target.value</p>
            transSrc 和 transTo 为翻译源语言和目标语言。其中 transSrc 可以为空，表示自动检测语言。text 为待翻译的文本。<br/>
            transSrc 和 transTo 必须要为语言的两个字母的简称。
        </p>
    </div>
  )
}
