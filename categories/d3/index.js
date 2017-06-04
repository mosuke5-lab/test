<!doctype html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D3.Js &middot; Goldstine研究所</title>

    <meta name="description" content="mosuke5&#39;s blog">

    <meta name="generator" content="Hugo 0.14" />
    <meta name="twitter:card" content="summary">
    
    <meta name="twitter:title" content="D3.Js &middot; Goldstine研究所">
    <meta name="twitter:description" content="mosuke5&#39;s blog">

    <meta property="og:type" content="article">
    <meta property="og:title" content="D3.Js &middot; Goldstine研究所">
    <meta property="og:description" content="mosuke5&#39;s blog">

    <link href='//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Oxygen:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/pure-min.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/grids-responsive-min.css">

    <link rel="stylesheet" href="https://blog.mosuke.tech/css/all.min.css">
    <link rel="stylesheet" href="https://blog.mosuke.tech/css/mosuke5.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">

    <link rel="alternate" type="application/rss+xml" title="Goldstine研究所" href="https://blog.mosuke.tech/index.xml" />
    <link rel="icon" type="image/png" href="/image/favicon.png">
</head>
<body>


<div id="layout" class="pure-g">
    <div class="sidebar pure-u-1 pure-u-md-1-4">
    <div class="header">
        <hgroup>
            <h1 class="brand-title"><a href="https://blog.mosuke.tech">Goldstine研究所</a></h1>
            <h2 class="brand-tagline"> mosuke5&#39;s blog </h2>
        </hgroup>

        <nav class="nav">
            <ul class="nav-list">
                
                
            </ul>
        </nav>
    </div>
</div>


    <div class="content pure-u-1 pure-u-md-3-4">
        <div>
            
            <div class="posts">
                
                <h1 class="content-subhead">15 Sep 2014, 13:56</h1>
                <section class="post">
                    <header class="post-header">

                        <a href="https://blog.mosuke.tech/entry/2014/09/15/135611/" class="post-title">D3.js、DBからのデータ連携方法の検討</a>

                        <p class="post-meta">
                            
                                By <strong class="post-author">mosuke5</strong>
                            
                            
                                under 
                                
                                <a class="post-category post-category-D3.js" href="https://blog.mosuke.tech/categories/d3.js">D3.js</a><a class="post-category post-category-Sinatra" href="https://blog.mosuke.tech/categories/sinatra">Sinatra</a><a class="post-category post-category-Ruby" href="https://blog.mosuke.tech/categories/ruby">Ruby</a>
                            
                        </p>
                    </header>

                    <div class="post-description">
                        最近D3.jsを使う機会があり、DBのデータを読み込ませる方法についていくつか検討した。 例えば以下の状況を考える。 【やりたいこと】 「DBに格納されているデータを使って、D3.jsで折れ線グラフを描く」 【DBの構造】 カラム名：型 date : datetime value : int ※また、下記ではSinatra上で行っているが、他の言語でも同様のことがいえる。 (1) 簡単なAPIのようなものを利用する 先に結論から書くと、今まで次の(2)(3)のようなやりかたをやっていたのだけれど、 これが一番複雑にならずに良いと思ったということ。 Sinatra側で/csvにアクセスするとcsvファイルをダウンロードできるようにする。 ```ruby #Sinatra側 get &lsquo;/csv&rsquo; do content_type &lsquo;application/csv&rsquo; attachment &lsquo;download.csv&rsquo; #DBからデータ取得(Activerecord利用) @data = Model.all() #出力するCSVデータの変数。csvヘッダーを先につけている。 @csv = &quot;date,value\n&quot; #DBのデータをCSVの形にして格納 @data.each do |d| @csv += d.date.to_s + &quot;,&quot; + d.value.to_s + &quot;\n&quot; end #csvtest.erbというビューに出力 erb :csvtest, :layout =&gt; false end &lt;p&gt;csvtest.erb&lt;/p&gt; ```ruby &lt;%= @csv %&gt; こうすることで"http://*****/csv"にアクセスするとcsvファイルとしてダウンロードできる状態になる。 条件指定をしてデータをダウンロードできるようにしたい場合はGETでパラメータ指定できるようにすれば良いと思う。 （SinatraでCSVファイルを生成するところのコードがナンセンスだと思っているので、もっといい方法があるはず…） また、今回はcsvにしているがjsonなどの他の形式でも同様のことがいえる。 これをD3.js側で以下のように読み込ませる。 d3.csv(&quot;/csv&quot;, function(error, data) {
                    </div>
                </section>
                
            </div>
            

            <hr class="footer-hr" />
<div class="">
    <div class="google-search-engine">
        <script>
          (function() {
            var cx = '012458736543810277235:x4juxtghjhg';
            var gcse = document.createElement('script');
            gcse.type = 'text/javascript';
            gcse.async = true;
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(gcse, s);
          })();
        </script>
		    <gcse:search></gcse:search>
    </div>
    <a class="pure-button" href="https://mosuke.tech "><i class="fa fa-user"></i> mosuke5</a>
    <a class="pure-button" href="/archive/"><i class="fa fa-archive"></i> Arvhive</a>
    <a class="pure-button" href="https://blog.mosuke.tech/index.xml"><i class="fa fa-rss"></i> rss</a>
</div>
<div class="footer">
    <div class="pure-menu pure-menu-horizontal pure-menu-open">
        <ul>
            <li>&copy; <strong>mosuke5</strong> All rights reserved.<br />Powered by <a class="hugo" href="https://gohugo.io/" target="_blank">hugo</a></li>
        </ul>
    </div>
</div>
<script src="https://blog.mosuke.tech/js/all.min.js"></script>

        </div>
    </div>
</div>

<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-99596316-1', 'auto');
ga('send', 'pageview');

</script>

</body>
</html>
