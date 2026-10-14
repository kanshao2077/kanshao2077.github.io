/* Research snapshot: 2026-10-14. Dates below distinguish publication from observation. */
(() => {
  const c = window.AIGC_COURSE;
  const source = (date, title, desc, url) => c.resources.push([date, title, desc, url]) - 1;
  const qm = source('2026.10', 'QuestMobile：AI 用户洞察与营销分析', '10月13日发布，统计2026年8月。国内 AI 原生 APP 用户规模与使用深度。', 'https://www.questmobile.com.cn/research/report/2109848735332814849/');
  const qmh = source('2026.07', 'QuestMobile：AI 应用市场半年报', '7月14日发布。单个 APP 月活使用报告中明确列出的6月口径；与8月行业规模分开展示。', 'https://www.questmobile.com.cn/research/report/2076954943839809537/');
  const a16z = source('2026.10', 'a16z：Top 100 Consumer AI Apps，第七期', '10月5日发布，主要使用8月数据。网页访问量、移动月活和美国消费面板是三个不同口径。', 'https://www.a16z.news/p/top-100-consumer-ai-apps-seventh');
  const st = source('2026.06', 'Sensor Tower：State of AI 2026', '6月16日发布。Q1 AI 助手移动端时长集中度；上半年收入为发布时的预测。', 'https://sensortower.com/press/sensor-tower-state-of-ai-2026-report-global-time-spent-on-generative-ai-apps-projected-to-more-than-double-year-over-year');
  const atlas = source('2026.09', 'World Labs：Atlas 世界模型', '9月1日介绍空间上下文与摄影机控制。处于早期访问阶段；演示不等于所有用户已能使用。', 'https://www.worldlabs.ai/blog/atlas');
  const world = source('2026.01', 'World Labs：World API', '从文字、图片或视频等输入生成可探索的3D世界。关注空间生成与下游导出。', 'https://www.worldlabs.ai/blog/announcing-the-world-api');
  const vidu = source('LIVE', 'Vidu：视频创作解决方案', '主体参考、动作迁移、首尾帧、口型同步等产品入口与示例。', 'https://platform.vidu.com/solutions');
  const runway = source('LIVE', 'Runway：官方更新记录', '核对生成、视频编辑、导出与多模型接入等能力的上线时间。', 'https://runway.com/changelog');
  const veo = source('2026.04', 'Google DeepMind：Veo 3.1 Lite 模型卡', '4月8日发布。文字/图像到音视频，并披露能力限制。', 'https://deepmind.google/models/model-cards/veo-3-1-lite/');
  const ltx = source('LIVE', 'LTX Studio：创作平台', '从分镜、角色资产到镜头编辑与声音的制作入口。', 'https://website.ltx.studio/');
  const adobe = source('LIVE', 'Adobe Firefly：生成与编辑', '图像、视频、声音及第三方模型。不同模型和计划的条件分别核对。', 'https://www.adobe.com/products/firefly.html');
  const platforms = [
    ['豆包','国内','文字','选题、中文资料整理、脚本讨论','把零散想法整理成可制作的大纲','https://www.doubao.com/'],
    ['DeepSeek','国内','文字','论证、结构拆解与文字任务','检查故事逻辑，比较不同方案','https://chat.deepseek.com/'],
    ['千问','国内','文字','中文助手与多模态任务入口','整理资料、拆解制作需求','https://www.qianwen.com/'],
    ['Kimi','国内','文字','阅读材料、提炼与写作辅助','从长材料中提取人物、事实和线索','https://www.kimi.com/'],
    ['腾讯元宝','国内','文字','中文检索与内容理解入口','为选题搜集信息，再回到原文核实','https://yuanbao.tencent.com/'],
    ['即梦 AI','国内','图像 / 视频','视觉资产与视频；Seedance 等模型入口','把角色、场景和镜头串入同一创作过程','https://jimeng.jianying.com/'],
    ['可灵 AI','国内','图像 / 视频','图像、音视频、参考与故事板控制','减少镜头动作、主体和声音之间的割裂','https://kling.ai/'],
    ['Vidu','国内','视频','主体参考、动作参考、首尾帧','复用角色资产，并把动作示范转为生成条件','https://www.vidu.com/'],
    ['海螺 / MiniMax','国内','视频 / 声音','视频生成与语音服务分属不同入口','制作镜头、旁白与角色声音','https://www.minimax.io/'],
    ['通义万相 / Wan','国内','图像 / 视频','生成产品与开放模型生态','在线创作或搭建可控的模型工作流','https://wan.video/'],
    ['PixVerse','国内团队 · 全球服务','视频','图生视频、视频创作与效果入口','快速试验运动、视觉效果与片段方向','https://pixverse.ai/'],
    ['ChatGPT','全球','文字 / 图像','对话、内容理解与视觉创作入口','用同一上下文讨论脚本和视觉需求','https://chatgpt.com/'],
    ['Claude','全球','文字','材料理解、写作与结构推演','梳理长文、项目规范与剧情逻辑','https://claude.ai/'],
    ['Gemini','全球','文字 / 图像','多模态助手与 Google 生成生态','连接资料理解与视觉创作任务','https://gemini.google.com/'],
    ['Midjourney','全球','图像 / 视频','视觉探索、风格与图像资产','先确定美术方向，再挑选可复用资产','https://www.midjourney.com/'],
    ['Adobe Firefly','全球','图像 / 视频 / 声音','生成、编辑与 Adobe 制作生态','减少生成素材进入设计、剪辑后的返工','https://www.adobe.com/products/firefly.html'],
    ['Runway','全球','视频','视频生成、编辑与多模型创作入口','在已有镜头上继续制作和修改','https://runway.com/'],
    ['Google Flow / Veo','全球','视频','Flow 是创作产品，Veo 是视频模型系列','把参考与音视频生成组织成镜头任务','https://labs.google/fx/tools/flow'],
    ['Luma','全球','视频','视频生成与修改入口','探索镜头运动与视觉变换','https://lumalabs.ai/'],
    ['LTX Studio','全球','视频','分镜、资产与镜头编辑','管理多个镜头和同一组人物资产','https://website.ltx.studio/'],
    ['Higgsfield','全球','图像 / 视频','多模型创意套件与镜头效果','集中试验不同模型和镜头方案','https://higgsfield.ai/'],
    ['ElevenLabs','全球','声音','语音、配音与声音工具','减少旁白、角色声音和语言版本的制作成本','https://elevenlabs.io/'],
    ['Suno','全球','声音','音乐与歌曲生成','快速探索节奏、氛围和音乐方向','https://suno.com/'],
    ['World Labs / Marble','全球','3D / 空间','可探索的生成空间；Atlas 是另一模型方向','为多视角观察、环境设计和摄影机规划提供空间','https://marble.worldlabs.ai/'],
    ['Tripo','全球服务','3D / 空间','文字、图片到3D资产','加速物体、道具的初步建模','https://www.tripo3d.ai/'],
    ['Meshy','全球服务','3D / 空间','3D资产与贴图生成','把平面创意转为可继续编辑的立体素材','https://www.meshy.ai/'],
    ['ComfyUI','开放生态','工作流','连接模型、控制与后期节点','把验证过的流程保存并重复运行','https://github.com/Comfy-Org/ComfyUI']
  ];
  c.platforms = platforms;
  const platformSources = platforms.map(p => source('LIVE', p[0] + ' 官方入口', p[3] + '。这里的用途是学习任务建议，不表示效果排名。', p[5]));
  c.glossary.push(
    ['whitebox','白模 / 灰模','先用没有复杂材质的简单3D形体搭建人物、道具与环境，预演空间和摄影机。它是一种制作方法，不是单一的新模型。','用方块表示墙与门，用简化人形表示角色，再从三个机位导出参考。'],
    ['motion','动作迁移 / 运动参考','利用示范视频等输入约束生成内容中的运动、节奏或姿态。具体保留哪些信息取决于产品。','先拍一段转身收伞动作，再让角色按类似节奏表演。'],
    ['worldmodel','世界模型','尝试学习环境状态及其变化的模型方向。在创作产品中，它可支持空间生成、不同视角或交互；并非所有自称世界模型的产品都有相同能力。','生成可探索庭院，再设计摄影机从门外进入的路径。'],
    ['splat','3D Gaussian Splatting','用大量带颜色、透明度和空间参数的高斯基元表达并渲染场景的方法。它不是传统三角网格。','可用于浏览重建空间；编辑碰撞、骨骼动画时未必能像普通网格那样直接使用。'],
    ['multiref','多模态参考','同时用文字、图片、视频或声音等条件说明主体、外观、动作与声音；每个参考应有明确职责。','人物图管外貌，白模视频管空间和运镜，动作示范管节奏。'],
    ['mau','MAU / 月活跃用户','在指定月份内满足统计机构活跃条件的用户数。设备去重、样本和渠道覆盖会影响结果。','一个人同时用豆包和千问，可以分别计入两者月活，不能把它们直接相加当作不同的人。'],
    ['iap','IAP / 应用内购买收入','由移动应用商店内购买产生的收入口径，通常不等于产品全部收入。','网页订阅、企业合同与API收入可能不在同一份 IAP 统计里。']
  );
  c.groups.push({name:'行业与新技术',en:'THE LANDSCAPE',duration:'拓展阅读 · 80分钟',ids:['platforms','market','tech']});
  c.lessons.push(
    {id:'platforms',title:'国内外平台，放进一张地图',desc:'按创作任务选工具，分清公司、模型、产品和入口。',minutes:25,sources:platformSources,exercise:'选一个具体作品，给“脚本、图片、视频、声音、后期”各挑一个入口。用同一任务比较两个视频工具，记录可用率与修改成本。',checks:['能区分平台产品与模型名称','能按自己的痛点选工具，而不只看榜单'],body:`
      <h2>先找岗位，再选工具</h2><p>AIGC 平台正在互相扩展：写作助手可以生图，生图产品可以做视频，剪辑套件也能接入多个模型。因此，下表按<strong>你想完成的任务</strong>整理代表性入口，不是覆盖全世界所有产品的名录，也不按名气排序。“国内”主要指面向国内的常用入口；团队所在地与服务地区不是一回事。</p>
      <div class="flow"><span>内容与脚本</span><i>→</i><span>视觉资产</span><i>→</i><span>镜头与声音</span><i>→</i><span>剪辑与交付</span></div>
      <div id="platform-map-slot"></div>
      <h2>同一个模型，可能有不同的产品体验</h2><p>Seedance 是模型系列，即梦是创作产品；Veo 是模型系列，Flow 是 Google 的创作入口。Runway、Firefly 等产品还会提供第三方模型。比较时要记下<strong>入口＋模型版本＋模式＋参考条件</strong>，只写平台名字无法复现结果。</p>
      <h2>怎么判断哪个更适合你</h2><div class="table-wrap"><table><thead><tr><th>要比较的东西</th><th>具体怎么试</th></tr></thead><tbody><tr><td>控制是否有效</td><td>同一人物、同一动作、同一空间，检查参考是否真的被遵守</td></tr><tr><td>修改成本</td><td>只改一处：如衣服颜色。观察其他内容是否也被改坏</td></tr><tr><td>制作可用率</td><td>生成若干测试版本，统计能直接进入剪辑的镜头数</td></tr><tr><td>真实花费</td><td>记录成功镜头之前的所有积分、失败重试和人工返修时间</td></tr><tr><td>交付条件</td><td>检查尺寸、声音轨、下载格式、水印和使用条件</td></tr></tbody></table></div>
      <div class="callout"><span class="label">先搭最小组合</span><p>刚开始，一个文字助手＋一个图像/视频入口＋一个剪辑工具就够完成小作品。某个任务反复卡住，再为它增加专用工具。页面上的用途是实践建议；具体能力、地区可用性和收费以实际账户为准。</p></div>`},
    {id:'market',title:'市场有多大？比例怎么算？',desc:'读懂最新研究中的规模、使用集中度和付费，避免误把流量当收入。',minutes:20,sources:[qm,qmh,a16z,st],exercise:'找一条“市场占比”新闻，写下统计时间、地区、指标、分母和来源。缺少其中一项时，先不要用它判断平台强弱。',checks:['知道月活、访问量、时长和收入不能混用','知道国内、全球和美国样本不能直接比较'],body:`
      <div class="callout"><span class="label">核查于 2026年10月14日</span><p>这里展示公开报告中已核实的快照。最新发布的报告也可能使用几个月前的数据。公开资料目前不足以拼出一个统一、可比的“全球所有 AIGC 平台收入份额”。下面把市场拆成可解释的几种口径。</p></div>
      <h2>国内：用户规模与使用深度</h2><div class="metric-pair"><div><strong>5.37<span>亿</span></strong><p>2026年8月 · 国内 AI 原生 APP 用户规模</p></div><div><strong>85.1<span>次</span></strong><p>同月人均使用次数 · 同比增长67.1%</p></div></div><p class="data-note">QuestMobile，2026年10月13日发布。范围是报告定义的 AI 原生 APP，包含助手等应用，不等同于“专业 AI 视频创作者”。<a href="${c.resources[qm][3]}" target="_blank" rel="noopener noreferrer">查看原报告 ↗</a></p>
      <h3>单个平台月活：另一个时间快照</h3><figure class="data-figure"><figcaption>2026年6月 · 国内 APP 月活（亿人）</figcaption><div class="data-bar"><span>豆包</span><div><i style="width:100%"></i></div><b>3.82</b></div><div class="data-bar"><span>千问</span><div><i style="width:43.72%"></i></div><b>1.67</b></div><div class="data-bar"><span>DeepSeek</span><div><i style="width:33.77%"></i></div><b>1.29</b></div></figure><p class="data-note">QuestMobile半年报，7月14日发布。横条表示月活绝对规模，长度以本图最大值归一。用户可能重叠；这三个数字不能直接加总或画成占比饼图。与上面的8月行业总量不能跨月份计算份额。</p>
      <h2>全球：使用集中度与访问量</h2><div class="table-wrap"><table><thead><tr><th>观察</th><th>数据</th><th>它说明什么</th></tr></thead><tbody><tr><td>AI 助手移动端总时长</td><td>ChatGPT＋DeepSeek＋Gemini：接近90%</td><td>Sensor Tower，2026年Q1。分母是 AI Assistant apps 的使用时长；不是全部 AIGC 收入</td></tr><tr><td>头部产品网页访问量</td><td>ChatGPT 约为 Gemini 的2倍、Claude 的6倍</td><td>a16z，第七期，2026年8月数据。访问次数不等于人数，也不包含全部创作工具</td></tr></tbody></table></div>
      <h2>美国：谁愿意付费</h2><p>a16z 引用 YipitData 的美国电子收据面板：2026年8月，符合统计条件的消费者中，<strong>4.5%</strong>持有 ChatGPT、Gemini、Claude 至少一个有效个人付费订阅。报告还发现，付费者中消费最高的1%贡献了观察到的 AI 消费支出的<strong>19.5%</strong>。这是美国样本的消费者支出，不是全球普查或公司总营收。</p>
      <h2>把“市场”拆成四层</h2><div class="table-wrap"><table><thead><tr><th>层级</th><th>看什么</th><th>对创作者的意义</th></tr></thead><tbody><tr><td>模型与算力</td><td>生成、推理、API 与部署能力</td><td>决定基础能力和调用方式</td></tr><tr><td>创作产品</td><td>账户、订阅、积分、资产和编辑</td><td>决定你实际怎样制作和修改</td></tr><tr><td>制作服务</td><td>广告、短剧、设计、配音等交付</td><td>客户付费的对象是完整结果</td></tr><tr><td>内容发行</td><td>观看、转化、版权、商业合作</td><td>作品能否触达观众并产生价值</td></tr></tbody></table></div><p>四层可能互相采购、重复记账，不能把各层“市场规模”直接相加。对个人创作者，更有用的指标是<strong>每个合格镜头的成本、返修时间和观众是否理解故事</strong>。下面是基于这些数据的实践判断：大众助手用户多，专业制作仍需要按任务选工具；流量大不等于你的镜头可用率高。</p>
      <details class="faq"><summary>为什么没有一张“中国 vs 全球市场份额”饼图？</summary><p>要做那张图，必须先定义同一时期、同一收入范围和同一地区归属。模型 API、网页订阅、应用内购买、企业合同和制作收入往往分开统计，跨境平台还存在地区归属问题。目前选到的报告口径不兼容，强行相加会给人错误的精确感。</p></details>`},
    {id:'tech',title:'新技术，究竟解决什么痛点',desc:'白模、运动参考、原生音视频、编辑与世界模型：从“能生成”走向“能控制”。',minutes:35,sources:[6,7,vidu,runway,veo,atlas,world,ltx,adobe],exercise:'为你的庭院短片搭一个粗略空间，画出门、人物与三个机位。任选两个角度制作参考，比较模型输出是否保持门的位置、人物走向和遮挡关系。',checks:['知道白模提供的是空间与调度条件','能给每个参考素材指定职责','能区分公开产品功能、早期访问与官方演示'],body:`
      <h2>先理解最近改变了什么</h2><p>创作者长期卡在三个地方：<strong>画面好看，但换角度就变；动作写得很细，但执行不准确；只想修改一处，重做后其他地方也变了。</strong>近期产品升级更重视参考、摄影机、音画联合和定向编辑。以下日期是代表更新，并非技术第一次被发明的时间。</p>
      <div class="tech-dates"><span>2026.07.31 · Seedance 2.5</span><span>2026.09.01 · Atlas 早期访问</span><span>核查 · 2026.10.14</span></div>
      <h2>01 / 白模：先把空间和走位定下来</h2><p><button class="term" data-term="whitebox">白模</button>通常是简单3D场景或预演：墙是方块，人物是简化人形，道具用粗形体占位。材质很粗，但门在左边还是右边、两个人相隔多远、摄影机怎么走，都可以先确定。<strong>白模是成熟的预演方法；更新的是生成模型接收并理解这类参考的能力。</strong></p>
      <figure class="whitebox-figure"><svg viewBox="0 0 720 285" role="img" aria-label="白模预演示意：庭院、门、人物走位和三个摄影机位置"><defs><marker id="arrow-end" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="currentColor"/></marker></defs><path d="M110 180L370 78L620 180L355 268Z" fill="var(--wash)" stroke="var(--line)" stroke-width="2"/><path d="M110 180V70L370 5L620 70V180M370 5V78" fill="none" stroke="var(--faint)" stroke-width="2"/><path d="M435 104V43L484 55V124" fill="var(--paper)" stroke="var(--muted)" stroke-width="2"/><text x="489" y="52" fill="var(--muted)" font-size="13">门的位置固定</text><ellipse cx="332" cy="167" rx="16" ry="6" fill="var(--line)"/><circle cx="332" cy="105" r="11" fill="var(--muted)"/><path d="M332 116V145M332 124L317 138M332 124L347 138M332 145L321 165M332 145L343 165" stroke="var(--muted)" stroke-width="7" stroke-linecap="round"/><path d="M355 154L432 123" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#arrow-end)"/><text x="358" y="142" fill="var(--accent)" font-size="12">人物走位</text><g fill="var(--accent)"><rect x="171" y="204" width="23" height="15" rx="2"/><path d="M194 207L204 202V221L194 216Z"/><rect x="510" y="194" width="23" height="15" rx="2"/><path d="M510 197L500 192V211L510 206Z"/><rect x="372" y="222" width="23" height="15" rx="2"/><path d="M377 222L373 213H394L390 222Z"/></g><g fill="var(--muted)" font-size="12"><text x="160" y="243">A / 全景</text><text x="498" y="238">B / 侧面</text><text x="362" y="263">C / 近景</text></g></svg><figcaption>同一个粗场景，导出多个机位。示意图说明空间规划，不是模型生成结果。</figcaption></figure>
      <div class="table-wrap"><table><thead><tr><th>具体痛点</th><th>白模怎么帮助</th><th>仍要检查</th></tr></thead><tbody><tr><td>正面好看，反打房间变了</td><td>多机位来自同一空间，给模型统一结构依据</td><td>门窗位置、尺度、遮挡是否遵守参考</td></tr><tr><td>人走不到指定位置</td><td>先预演路径、速度与动作时间</td><td>运动参考是否实际生效，有无滑步和穿模</td></tr><tr><td>环绕运镜后背景重组</td><td>提供连续的摄影机路径与空间变化</td><td>拐角与背面是否稳定，模型是否补出错误物体</td></tr></tbody></table></div>
      <h3>第一次使用，做五步就够</h3><ol><li>在熟悉的3D工具中用方块搭一个庭院和门；不会3D时，先做平面空间图。</li><li>放置简化人物，确定起点、终点、面朝方向与动作。</li><li>固定三个摄影机，先输出低成本的静帧或预演视频。</li><li>在明确支持结构或视频参考的入口里输入白模，并另给人物和风格参考。写清各自用途。</li><li>先测试一小段，逐项对照空间、机位和动作；确认有效后再增加细节。</li></ol><p>Seedance 2.5 在7月31日官方发布中明确强调白模与运动参考。不同入口支持的上传方式和功能可能不同。单人物固定近景通常先用一张清楚的参考图即可；涉及多机位、复杂空间或走位时，白模投入更有价值。</p>
      <h2>02 / 多模态参考：不同素材，各管一件事</h2><p><button class="term" data-term="multiref">多模态参考</button>把身份、空间、动作和声音分开交代。人物图负责外貌，场景图负责美术，白模负责空间和摄影机，动作视频负责运动节奏，音频负责声音。Vidu 的主体参考与动作迁移、Seedance 的多模态参考都是可查看的产品方向。参考越多不自动越好；互相冲突时，模型仍可能误解。</p>
      <h2>03 / 运动参考：把“怎么动”直接演出来</h2><p>复杂舞蹈、武打、收伞或转身，很难只靠文字描述节奏。<button class="term" data-term="motion">运动参考</button>让你提供示范视频，将部分动作与时间关系转为约束。先用无关紧要的简化人物示范也可以。它帮助表达动作意图，输出仍要检查肢体关系、接触、速度及参考中无意带入的构图。</p>
      <h2>04 / 原生音视频：同时考虑动作、台词与声音</h2><p>Seedance 2.5、Kling VIDEO 3.0，以及 Veo 系列的官方说明都涉及音视频生成。用途是减少口型、台词、动作和环境音分开制作时的对齐工作。它不能替你保证台词正确、声音授权有效或每句表演自然。先验收内容，再决定保留原声音，还是拆到剪辑中重做。</p>
      <h2>05 / 定向编辑：把修改范围收窄</h2><p>局部、参考、绿幕或时间范围编辑，针对的是“只改一处却把整段重做”的返工。Seedance 官方说明强调时间戳与多种视频编辑；Runway、Firefly 也提供生成与编辑流程。给修改明确范围，并把<strong>必须保持的内容</strong>写清。验收时同时看修改区和保护区，因为编辑可能影响其他帧。</p>
      <h2>06 / 世界模型：把一张图，变成可探索的空间</h2><p><button class="term" data-term="worldmodel">世界模型</button>相关创作方向尝试把空间和摄影机变成明确条件。World Labs 的 Marble / World API 提供生成空间的产品入口；9月1日介绍的 Atlas 展示了空间上下文、视角生成与摄影机控制，页面仍提供早期访问申请。它适合研究多视角场景、虚拟勘景与机位规划。</p><p>一张图看不到的背面，需要系统推断或创造。生成的新角度可能很合理，却并不是现实中真实存在的样子。要复现真实地点，应补充多视角参考并核对几何。导出为<button class="term" data-term="splat">高斯泼溅</button>等表示，也不意味着已经得到能直接绑定骨骼、碰撞或改拓扑的网格资产。</p>
      <h2>07 / 制作工作流：资产可以跨镜头复用</h2><p>LTX Studio 等产品把分镜、资产、镜头编辑组织在同一流程中；ComfyUI 可以保存节点连接。它们解决的另一类问题是：好用的流程只存在于你的记忆里，下一次又从头摸索。保存参考职责、参数、结果版本与返修记录，比单纯保存一条提示词更有用。</p>
      <div class="callout"><span class="label">用痛点检查技术价值</span><p>写出一个你现在经常失败的任务。用新能力做小规模对照：成功率是否提高？返修是否减少？每个合格镜头是否更便宜？如果没有改善，先检查参考质量和产品入口，再决定是否把它放入常用流程。</p></div>`}
  );
})();
