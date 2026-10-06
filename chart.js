(function(){
  const chart = document.getElementById("relationship-chart");
  const detail = document.getElementById("relationship-detail");
  if (!chart) return;

  const data = {
    nodes: [
      {
        id:"Jesus", type:"witness-core",
        zh:"耶稣基督", en:"Jesus Christ",
        subZh:"彼得和约翰所见证的中心", subEn:"Center of Peter & John's testimony",
        refsZh:["使徒行传 3:13–16","使徒行传 4:10–12","诗篇 118:22 → 使徒行传 4:11"], refsEn:["Acts 3:13–16","Acts 4:10–12","Psalm 118:22 → Acts 4:11"],
        noteZh:"彼得和约翰的重点，是见证耶稣被钉十字架、神使祂从死里复活，并宣告救恩在祂里面。",
        noteEn:"Peter and John’s focus was to testify that Jesus was crucified, raised from the dead by God, and that salvation is found in Him."
      },
      {
        id:"PeterJohn", type:"witness",
        zh:"彼得与约翰", en:"Peter & John",
        subZh:"见证人", subEn:"Witnesses",
        refsZh:["使徒行传 4:13","使徒行传 4:20","使徒行传 4:29–31"], refsEn:["Acts 4:13","Acts 4:20","Acts 4:29–31"],
        noteZh:"他们以“所看见、所听见的”为见证核心，并在圣灵充满中继续放胆讲论。",
        noteEn:"They grounded their testimony in what they had “seen and heard,” and continued speaking boldly in the power of the Holy Spirit."
      },
      {
        id:"Annas", type:"authority",
        zh:"亚那", en:"Annas",
        subZh:"大祭司家族", subEn:"High-priestly family",
        refsZh:["路加福音 3:2","约翰福音 18:13, 19–24","使徒行传 4:6","使徒行传 4:23；5:24"], refsEn:["Luke 3:2","John 18:13, 19–24","Acts 4:6","Acts 4:23; 5:24"],
        noteZh:"亚那在约翰福音 18 章与耶稣受审背景直接相连；使徒行传 4:6 又明确把他列在审问彼得和约翰的人中。",
        noteEn:"Annas is directly connected with the proceedings around Jesus in John 18 and is explicitly named in Acts 4:6 among those questioning Peter and John."
      },
      {
        id:"Caiaphas", type:"authority",
        zh:"该亚法", en:"Caiaphas",
        subZh:"大祭司", subEn:"High priest",
        refsZh:["马太福音 26:3, 57","约翰福音 11:49–52","约翰福音 18:13–14, 24, 28","使徒行传 4:6","使徒行传 5:17–28","使徒行传 7:1"], refsEn:["Matthew 26:3,57","John 11:49–52","John 18:13–14,24,28","Acts 4:6","Acts 5:17–28","Acts 7:1"],
        noteZh:"该亚法与耶稣受审、交给彼拉多等事件有直接关联；他也在使徒行传 4:6 被点名。",
        noteEn:"Caiaphas is directly connected to the proceedings against Jesus and His handover to Pilate; he is also named in Acts 4:6."
      },
      {
        id:"JohnAuthority", type:"authority",
        zh:"约翰", en:"John",
        subZh:"可能是亚那之子约拿单", subEn:"Possibly Jonathan, son of Annas",
        refsZh:["使徒行传 4:6","使徒行传 4:23；5:24","可能包括使徒行传 9:1–2"], refsEn:["Acts 4:6","Acts 4:23; 5:24","possibly Acts 9:1–2"],
        noteZh:"使徒行传 4:6 是唯一直接点名此“约翰”的经文。这里不是使徒约翰。",
        noteEn:"Acts 4:6 is the only verse that directly names this John. He is not the apostle John."
      },
      {
        id:"Alexander", type:"authority",
        zh:"亚历山大", en:"Alexander",
        subZh:"大祭司家族相关人物", subEn:"Associated with the high-priestly family",
        refsZh:["使徒行传 4:6","使徒行传 4:23；5:24"], refsEn:["Acts 4:6","Acts 4:23; 5:24"],
        noteZh:"使徒行传 4:6 是唯一直接点名此亚历山大的经文；圣经中的其他亚历山大通常不被视为同一人。",
        noteEn:"Acts 4:6 is the only verse that directly names this Alexander; other biblical men named Alexander are generally treated as different people."
      },
      {
        id:"Psalm2", type:"scripture",
        zh:"诗篇 2", en:"Psalm 2",
        subZh:"徒 4:25–27", subEn:"Acts 4:25–27",
        refsZh:["诗篇 2:1–2","使徒行传 4:25–27","使徒行传 4:28"], refsEn:["Psalm 2:1–2","Acts 4:25–27","Acts 4:28"],
        noteZh:"教会的祷告把诗篇 2 应用于希律、彼拉多、外邦人和以色列民聚集抵挡基督的情景。",
        noteEn:"The church’s prayer applies Psalm 2 to Herod, Pilate, the Gentiles, and the people of Israel gathered against Christ."
      },
      {
        id:"Psalm118", type:"scripture",
        zh:"诗篇 118:22", en:"Psalm 118:22",
        subZh:"徒 4:11", subEn:"Acts 4:11",
        refsZh:["诗篇 118:22","使徒行传 4:11"], refsEn:["Psalm 118:22","Acts 4:11"],
        noteZh:"彼得把“匠人所弃的石头”应用在耶稣身上。",
        noteEn:"Peter applies the rejected stone / cornerstone text to Jesus."
      }
    ],
    links: [
      {source:"PeterJohn", target:"Jesus", kind:"witness"},
      {source:"Annas", target:"Caiaphas", kind:"family"},
      {source:"Annas", target:"Jesus", kind:"hearing"},
      {source:"Caiaphas", target:"Jesus", kind:"hearing"},
      {source:"Annas", target:"PeterJohn", kind:"acts4"},
      {source:"Caiaphas", target:"PeterJohn", kind:"acts4"},
      {source:"JohnAuthority", target:"PeterJohn", kind:"acts4"},
      {source:"Alexander", target:"PeterJohn", kind:"acts4"},
      {source:"Psalm118", target:"Jesus", kind:"scripture"},
      {source:"Psalm2", target:"Jesus", kind:"scripture"}
    ]
  };

  function currentLang(){
    return document.body.dataset.lang === "en" ? "en" : "zh";
  }

  function renderDetail(d){
    const lang = currentLang();
    const name = lang === "zh" ? d.zh : d.en;
    const sub = lang === "zh" ? d.subZh : d.subEn;
    const note = lang === "zh" ? d.noteZh : d.noteEn;
    const refTitle = lang === "zh" ? "主要经文" : "Key references";
    const refs = lang === "zh" ? (d.refsZh || []) : (d.refsEn || []);
    detail.innerHTML = `
      <div class="detail-label">${sub}</div>
      <h3>${name}</h3>
      <p>${note}</p>
      <strong>${refTitle}</strong>
      <ul>${refs.map(r => `<li>${r}</li>`).join("")}</ul>
    `;
  }

  function draw(){
    chart.innerHTML = "";
    const containerWidth = chart.clientWidth || 760;
    const isMobile = containerWidth < 620;
    const width = isMobile ? Math.max(320, containerWidth) : Math.max(620, containerWidth);
    const height = isMobile
      ? Math.max(360, Math.min(430, Math.round(width * 0.78)))
      : 540;

    const svg = d3.select(chart)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio","xMidYMid meet");

    const g = svg.append("g");

    const nodes = data.nodes.map(d => ({...d}));
    const links = data.links.map(d => ({...d}));

    const sim = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d=>d.id).distance(d => d.kind==="witness" ? 125 : 150).strength(.75))
      .force("charge", d3.forceManyBody().strength(-620))
      .force("center", d3.forceCenter(width/2, height/2))
      .force("collide", d3.forceCollide().radius(d => {
        if (isMobile) return d.type==="witness-core" ? 54 : 44;
        return d.type==="witness-core" ? 72 : 58;
      }))
      .stop();

    for(let i=0;i<260;i++) sim.tick();

    nodes.forEach(n => {
      n.x = Math.max(72, Math.min(width-72, n.x));
      n.y = Math.max(64, Math.min(height-64, n.y));
    });

    g.selectAll("line.link")
      .data(links)
      .join("line")
      .attr("class","link")
      .attr("x1",d=>d.source.x)
      .attr("y1",d=>d.source.y)
      .attr("x2",d=>d.target.x)
      .attr("y2",d=>d.target.y)
      .attr("stroke", d => d.kind==="hearing" || d.kind==="acts4" ? "#8e1c1c" : "#171717")
      .attr("stroke-width", d => d.kind==="witness" ? 4 : 1.6)
      .attr("stroke-dasharray", d => d.kind==="scripture" ? "5 5" : null)
      .attr("opacity", .72);

    const node = g.selectAll("g.node")
      .data(nodes)
      .join("g")
      .attr("class","node")
      .attr("transform",d=>`translate(${d.x},${d.y})`)
      .style("cursor","pointer")
      .on("click",(_,d)=>renderDetail(d));

    node.append("circle")
      .attr("r", d => {
        if (isMobile) return d.type==="witness-core" ? 44 : d.type==="witness" ? 38 : 34;
        return d.type==="witness-core" ? 54 : d.type==="witness" ? 46 : 41;
      })
      .attr("fill", d => d.type==="witness-core" ? "#8e1c1c" : d.type==="witness" ? "#111" : d.type==="scripture" ? "#fffdf8" : "#ded7ca")
      .attr("stroke","#111")
      .attr("stroke-width", d=>d.type==="witness-core" ? 3 : 1.5);

    node.append("text")
      .attr("class","node-label")
      .attr("text-anchor","middle")
      .attr("dy",".1em")
      .attr("fill", d => d.type==="witness-core" || d.type==="witness" ? "#fffdf8" : "#111")
      .style("font-size", d => isMobile ? (d.type==="witness-core" ? "12px" : "10.5px") : (d.type==="witness-core" ? "14px" : "12px"))
      .text(d => currentLang()==="zh" ? d.zh : d.en);

    node.filter(d=>d.type==="authority" || d.type==="scripture")
      .append("text")
      .attr("class","node-sub")
      .attr("text-anchor","middle")
      .attr("dy", isMobile ? "5.0em" : "5.7em")
      .text(d => currentLang()==="zh" ? d.subZh : d.subEn);

    svg.append("text")
      .attr("x",16).attr("y",24)
      .attr("font-family",'Arial,"Noto Sans SC",sans-serif')
      .attr("font-size",10).attr("font-weight",800)
      .attr("letter-spacing","1.5px")
      .attr("fill","#8e1c1c")
      .text(currentLang()==="zh" ? "见证 / WITNESS" : "WITNESS");

    renderDetail(nodes.find(d=>d.id==="Jesus"));
  }

  draw();
  let resizeTimer;
  window.addEventListener("resize",()=>{
    clearTimeout(resizeTimer);
    resizeTimer=setTimeout(draw,120);
  });

  document.getElementById("zhBtn")?.addEventListener("click",()=>setTimeout(draw,0));
  document.getElementById("enBtn")?.addEventListener("click",()=>setTimeout(draw,0));
})();
