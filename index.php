<!DOCTYPE html>

<html lang="en">
  <head>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="theme-color" content="#000" />

    <title>albertobonora.ca Toronto Based Web Developer</title>
    <meta property="og:title" content="Alberto Bonora | Web Developer" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.albertobonora.com/" />
    <meta property="og:image" content="img/bg.jpg" />
    <meta property="og:description" content="Toronto based web developer with experience in using and building on Wordpress, JS, CSS, VueJS, React & more."/>


    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>

    <?php
    if (substr($_SERVER['REMOTE_ADDR'], 0, 4) == '127.' || $_SERVER['REMOTE_ADDR'] == '::1') {
      echo '<link rel="stylesheet" href="dist/css/raw/main.css" type="text/css" media="all">';
    }else{
      echo '<link rel="stylesheet" href="dist/css/min/main.min.css" type="text/css" media="all">';
    }
    ?>
    <script src="dist/js/scripts.js"></script>

    <!-- <link rel="stylesheet" href="dist/css/min/main.min.css" type="text/css" media="all"> -->

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-683832-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-683832-1');
    </script>

  </head>
  <body>
    <nav>
      <h1>albertobonora.com</h1>
      <ul class="links-wrapper">
        <li class="twitter"><a href="https://twitter.com/abonora" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li class="github"><a href="https://github.com/abonora" target="_blank"><i class="fab fa-github"></i></a></li>
        <li class="linkedin"><a href="https://www.linkedin.com/in/abonora" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
      </ul>
    </nav>
    <section id="FullPageOne" class="full-page-wrapper">
      <div class="info-wrapper">
        <h1>albertobonora.com</h1>
        <p>Toronto based Web Developer</p>
        <ul class="links-wrapper">
          <li class="twitter"><a href="https://twitter.com/abonora" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
          <li class="github"><a href="https://github.com/abonora" target="_blank"><i class="fab fa-github-square"></i></a></li>
          <li class="linkedin"><a href="https://www.linkedin.com/in/abonora" target="_blank"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
      <span class="version">0.0.1</span>
    </section>
    <section id="AboutSlide" class="full-page-wrapper">
      <div class="info-wrapper">
        <h2>About</h2>
        <p>icons to use: wordpress html css js vue react php kentico</p>
        <ul>
          <li><i class="fab fa-wordpress"></i></li>
          <li><i class="fab fa-html5"></i></li>
          <li><i class="fab fa-css3-alt"></i></li>
          <li><i class="fab fa-js"></i></li>
          <li><i class="fab fa-vuejs"></i></li>
          <li><i class="fab fa-react"></i></li>
          <li><i class="fab fa-php"></i></li>
        </ul>
      </div>
    </section>
    <footer>
      <h2>small footer</h2>
      <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
    </footer>
    <!-- <section id="FullPageTwo" class="full-page-wrapper">
      <div class="info-wrapper">
        <h1>Slide 2</h1>
      </div>
    </section>
    <section id="FullPageThree" class="full-page-wrapper">
      <div class="info-wrapper">
        <h1>Slide 3</h1>
      </div>
    </section> -->
  </body>
</html