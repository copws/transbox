import React, { useState } from "react";
import { Input, Select, Row, Col } from "antd";
import axios from "axios";

let { TextArea } = Input;
let transtable = [
  {
    value: "zh",
    label: "中文",
  },
  {
    value: "en",
    label: "英语",
  },
  {
    value: "ru",
    label: "俄语",
  },
  {
    value: "fr",
    label: "法语",
  },
  {
    value: "ar",
    label: "阿拉伯语",
  },
  {
    value: "es",
    label: "西班牙语",
  },
  {
    value: "bg",
    label: "保加利亚文",
  },
  {
    value: "ca",
    label: "加泰罗尼亚文",
  },
  {
    value: "cs",
    label: "捷克文",
  },
  {
    value: "da",
    label: "丹麦文",
  },
  {
    value: "de",
    label: "德语",
  },
  {
    value: "el",
    label: "希腊文",
  },
  {
    value: "et",
    label: "爱沙尼亚文",
  },
  {
    value: "fi",
    label: "芬兰文",
  },
  {
    value: "ga",
    label: "爱尔兰盖尔文",
  },
  {
    value: "hr",
    label: "克罗地亚文",
  },
  {
    value: "hu",
    label: "匈牙利文",
  },
  {
    value: "is",
    label: "冰岛文",
  },
  {
    value: "it",
    label: "意大利文",
  },
  {
    value: "iw",
    label: "希伯来文",
  },
  {
    value: "ja",
    label: "日语",
  },
  {
    value: "kk",
    label: "哈萨克文",
  },
  {
    value: "ko",
    label: "韩语",
  },
  {
    value: "lt",
    label: "立陶宛文",
  },
  {
    value: "lv",
    label: "拉脱维亚文",
  },
  {
    value: "mk",
    label: "马其顿文",
  },
  {
    value: "nb",
    label: "挪威语（伯克梅尔）",
  },
  {
    value: "nl",
    label: "荷兰文",
  },
  {
    value: "no",
    label: "挪威语",
  },
  {
    value: "pl",
    label: "波兰文",
  },
  {
    value: "pt",
    label: "葡萄牙文",
  },
  {
    value: "ro",
    label: "罗马尼亚文",
  },
  {
    value: "sk",
    label: "斯洛伐克文",
  },
  {
    value: "sl",
    label: "斯洛文尼亚文",
  },
  {
    value: "sq",
    label: "阿尔巴尼亚文",
  },
  {
    value: "sr",
    label: "塞尔维亚文",
  },
  {
    value: "sv",
    label: "瑞典文",
  },
  {
    value: "th",
    label: "泰语",
  },
  {
    value: "tr",
    label: "土耳其文",
  },
  {
    value: "uk",
    label: "乌克兰文",
  },
];
let transtableWithAuto = [{value: "", label: "自动检测"}].concat(transtable)

export default function Main() {
  let [result, setResult] = useState("");
  let [status, setStatus] = useState("");
  let [transTo, setTransTo] = useState("en");
  let [transSrc, setTransSrc] = useState("");

  let translate = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://api.microsofttranslator.com/v2/Http.svc/Translate?appId=AFC76A66CF4F434ED080D245C30CF1E71C22959C&from=${transSrc}&to=${transTo}&text=${event.target.value}`
      )
      .then(
        (response) => {
          setStatus("");
          let transResult = response.data.substring(
            response.data.indexOf(">") + 1,
            response.data.lastIndexOf("<")
          )
          if (transResult === `<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/"/>`){
            throw new Error("输入值为空")
          }
          setResult(transResult);
        },
        (reason) => {
          console.log(reason.response.data);
          setStatus("error");
          setResult("对不起，出错了（控制台查看报错原因）");
        }
      )
      .catch((reason) => {
        console.log(reason);
        setStatus("error");
        setResult("您好像没有输入字符");
      });
  };

  return (
    <Row id="main-box">
      <Col span={11}>
        源语言：
        <Select style={{ width: "150px" }} defaultValue="" onChange={ e => setTransSrc(e) } options={transtableWithAuto}/><br/><br/>
        <TextArea
          rows={19}
          placeholder="输入内容，按下 Enter 以翻译"
          onPressEnter={translate}
          style={{resize: "none"}}
        ></TextArea>
      </Col>
      <Col span={2}></Col>
      <Col span={11}>
        目标语言：
        <Select style={{ width: "150px" }} defaultValue="en" onChange={ e => setTransTo(e) } options={transtable}/><br/><br/>
        <TextArea
          rows={19}
          readOnly
          placeholder="翻译结果"
          value={result}
          status={status}
          style={{resize: "none"}}
        ></TextArea>
      </Col>
    </Row>
  );
}
