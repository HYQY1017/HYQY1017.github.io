<?php
$dir = 'uploads';
if (!is_dir($dir)) mkdir($dir);

// 上传
if ($_POST && isset($_FILES['file'])) {
    $name = basename($_FILES['file']['name']);
    move_uploaded_file($_FILES['file']['tmp_name'], $dir . '/' . $name);
    header('Location: index.php');
    exit;
}

// 下载
if (isset($_GET['down'])) {
    $file = $dir . '/' . basename($_GET['down']);
    if (is_file($file)) {
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename=' . basename($file));
        readfile($file);
        exit;
    }
}

// 文件列表
$files = array_values(array_diff(scandir($dir), ['.', '..']));
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>文件上传下载</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{padding:30px;background:#f5f5f5;font-family:system-ui}
.container{max-width:600px;margin:0 auto;background:#fff;padding:25px;border-radius:12px}
h2{margin-bottom:20px;color:#333}
.upload{margin-bottom:25px}
input[type="file"]{padding:8px;width:70%}
button{padding:8px 16px;background:#007bff;color:white;border:none;border-radius:6px;cursor:pointer}
ul{list-style:none}
li{padding:10px;border-bottom:1px solid #eee}
a{color:#007bff;text-decoration:none}
</style>
</head>
<body>
<div class="container">
    <h2>文件上传下载</h2>

    <div class="upload">
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="file" required>
            <button type="submit">上传</button>
        </form>
    </div>

    <h3>文件列表</h3>
    <ul>
        <?php foreach ($files as $f): ?>
        <li>
            <a href="?down=<?= urlencode($f) ?>"><?= htmlspecialchars($f) ?></a>
        </li>
        <?php endforeach; ?>
    </ul>
</div>
</body>
</html>
