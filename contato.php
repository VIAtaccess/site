<?php
declare(strict_types=1);

header('Content-Type: text/html; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ./');
    exit;
}

$destino = '';
$config = __DIR__ . '/contato.config.php';
if (is_file($config)) {
    $valor = include $config;
    if (is_string($valor)) {
        $destino = trim($valor);
    }
}

function campo(string $nome): string
{
    $valor = $_POST[$nome] ?? '';
    $valor = is_string($valor) ? trim($valor) : '';
    return str_replace(["\r", "\n"], ' ', $valor);
}

$nome = campo('nome');
$email = campo('email');
$empresa = campo('empresa');
$cargo = campo('cargo');
$url = campo('url');
$origem = campo('origem') !== '' ? campo('origem') : 'site';

$erros = [];
if ($nome === '') {
    $erros[] = 'Informe o nome.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erros[] = 'Informe um e-mail válido.';
}
if ($empresa === '') {
    $erros[] = 'Informe a empresa.';
}

$enviado = false;
if ($erros === [] && $destino !== '' && filter_var($destino, FILTER_VALIDATE_EMAIL)) {
    $assunto = 'Pedido de diagnóstico — ' . $empresa;
    $corpo = "Origem: {$origem}\nNome: {$nome}\nE-mail: {$email}\nEmpresa: {$empresa}\nCargo: {$cargo}\nURL: {$url}\n";
    $headers = 'From: ' . $destino . "\r\nReply-To: " . $email . "\r\nContent-Type: text/plain; charset=UTF-8";
    $enviado = mail($destino, $assunto, $corpo, $headers);
}

$title = $enviado ? 'Pedido recebido' : 'Pedido não enviado';
?>
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?> — t-access</title>
  <style>
    body{margin:0;font-family:system-ui,sans-serif;background:#F5F6F7;color:#1E2427;line-height:1.6}
    main{max-width:40rem;margin:4rem auto;padding:1.5rem;background:#fff;border:1px solid #D5DADD;border-radius:14px}
    a{color:#9E1F27}
    :focus-visible{outline:3px solid #1A73E8;outline-offset:3px}
  </style>
</head>
<body>
<main>
  <h1><?= htmlspecialchars($title, ENT_QUOTES, 'UTF-8') ?></h1>
  <?php if ($enviado): ?>
    <p>Recebemos o pedido de <?= htmlspecialchars($nome, ENT_QUOTES, 'UTF-8') ?>. Vamos responder no e-mail informado.</p>
  <?php elseif ($erros !== []): ?>
    <p>Revise os dados e tente de novo.</p>
    <ul>
      <?php foreach ($erros as $erro): ?>
        <li><?= htmlspecialchars($erro, ENT_QUOTES, 'UTF-8') ?></li>
      <?php endforeach; ?>
    </ul>
  <?php else: ?>
    <p>A hospedagem ainda não tem o e-mail de destino. Na Locaweb, crie o arquivo <code>contato.config.php</code> na mesma pasta, com o conteúdo <code>&lt;?php return 'seu-email@taccess.com.br';</code>, e envie o formulário outra vez.</p>
  <?php endif; ?>
  <p><a href="./">Voltar</a></p>
</main>
</body>
</html>
