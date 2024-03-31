<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Redirect</title> 
        
        <meta property="og:type" content="video.other">

        <meta name="twitter:player" content="https://www.youtube.com/embed/dQw4w9WgXcQ"> 
        <meta name="og:video:width" content="1920"> 
        <meta name="og:video:height" content="1080"> 
        <meta http-equiv="refresh" content="0; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <script type="text/javascript">
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        </script>
        
        <?php if (isset($_GET['i']) && $_GET['i']!=""): ?>
            <meta name="twitter:image" content="https://i.imgur.com/<?php echo $_GET['i']; ?>.png">
        <?php else: ?>
            <meta name="twitter:image" content="https://i.imgur.com/JKSIDdm.png">
        <?php endif ?>

        
    </head> 
    <body> 
        <p>Redirecting to <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">https://www.youtube.com/watch?v=dQw4w9WgXcQ</a></p>
    </body>
</html>
