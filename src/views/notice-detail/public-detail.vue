<template>
  <div>
    <header-nav></header-nav>
    <div class="title">
      十三届全国人大二次会议在京开幕
    </div>
    <div class="time">
      2019-03-05 14:18
    </div>
    <div class="border"></div>
    <div class="content">
      李克强说，2019年要突出重点、把握关键，扎实做好十项工作：一是继续创新和完善宏观调控，确保经济运行在合理区间；二是激发市场主体活力，着力优化营商环境；三是坚持创新引领发展，培育壮大新动能；四是促进形成强大国内市场，持续释放内需潜力；五是对标全面建成小康社会任务，扎实推进脱贫攻坚和乡村振兴；六是促进区域协调发展，提高新型城镇化质量；七是加强污染防治和生态建设，大力推动绿色发展；八是深化重点领域改革，加快完善市场机制；九是推动全方位对外开放，培育国际经济合作和竞争新优势；十是加快发展社会事业，更好保障和改善民生。
      李克强还就加强政府自身建设，民族、宗教和侨务工作，国防和军队建设，香港、澳门发展和两岸关系，以及我国外交政策作了阐述
      根据会议议程，大会审查国务院关于2018年国民经济和社会发展计划执行情况与2019年国民经济和社会发展计划草案的报告及2019年计划草案、2018年中央和地方预算执行情况与2019年中央和地方预算草案的报告及2019年全国预算草案。
      在主席台就座的还有：丁薛祥、刘鹤、许其亮、孙春兰、李希、李强、李鸿忠、杨洁篪、杨晓渡、张又侠、陈希、陈全国、陈敏尔、胡春华、郭声琨、黄坤明、蔡奇、尤权、魏凤和、王勇、王毅、肖捷、赵克志、周强、张军、张庆黎、刘奇葆、帕巴拉&middot;格列朗杰、董建华、万钢、何厚铧、卢展工、王正伟、马飚、陈晓光、梁振英、夏宝龙、杨传堂、李斌、巴特尔、汪永清、何立峰、苏辉、郑建邦、辜胜阻、刘新成、何维、邵鸿、高云龙，以及中央军委委员李作成、苗华、张升民等。
    </div>
  </div>
</template>

<script>
  import headerNav from './components/header'
  export default {
    name: 'publicDetail',
    components: {
      headerNav
    }
  }
</script>

<style lang="less" scoped>
  @r: 50rem;
  .title {
    padding: 21/@r 26/@r 8/@r;
    color: #333;
    font-weight: bold;
    font-size: 44/@r;
    line-height: 64/@r;
  }
  .time {
    color: #999;
    font-size: 26/@r;
    padding-left: 29/@r;
  }
  .border{
    margin: 40/@r 20/@r 0;
    border-bottom: 1px solid transparent;
    -webkit-box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
    box-shadow:0px 1/@r 0px 0px rgba(230,230,230,1);
  }
  .content {
    padding: 20/@r 30/@r;
    font-size:34/@r;
    line-height:54/@r;
    color: #505050;
  }
</style>
