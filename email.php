<?php
if(!isset($_POST['contentComment'])||!isset($_POST['subjectComment'])||!isset($_POST['emailComment'])) {
exit(1);
};
$sujet='Message de mon site personnel';
$messageIntern="De : ".$_POST['emailComment']."<br>Sujet : ".$_POST['subjectComment']."<br>message :<br><br>".$_POST['contentComment'];
$message="<html><head>"."<meta http-equiv='Content-Language' content='en-us'>"."<meta http-equiv='Content-Type' content='text/html; charset=windows-1252'>"."</head><body>".$messageIntern."<br><br></body></html>";
$destinataire='pal0man06@gmail.com';
$headers='From: "Christian Pavinich"<contact@christianpavinich.com>'."\n";
$headers.='Reply-To: contact@christianpavinich.com'."\n";
$headers="MIME-Version: 1.0 \n";
$headers.='Content-Type: text/html; charset="utf-8"'."\n";
$headers.='Content-Transfer-Encoding: 8bit';
$headers.="Content-type: text/html; charset=iso-8859-1 \n";
if(mail($destinataire,$sujet,$message,$headers)) {
echo "email envoyé";
} else {
exit(1);
}


?>