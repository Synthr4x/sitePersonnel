<?php

if (!isset($_POST['inputname']) ||
	!isset($_POST['inputemail']) ||
	!isset($_POST['inputsubject']) ||
	!isset($_POST['inputmessage'])) {

	exit("Un des champs est vide.");
}

;


$sujet = 'Contacte de mon site perso !';
$message = "De : " . $_POST['inputname'] . "<br>" . $_POST['inputemail'] .  "<br>message : " . $_POST['inputmessage'];
$destinataire = 'jokho26@gmail.com';


 $headers ='From: "Steven Siddi"<contact@steven-siddi.com>'."\n";
 $headers .='Reply-To: contact@steven-siddi.com'."\n";
 $headers .='Content-Type: text/html; charset="utf-8"'."\n";
 $headers .='Content-Transfer-Encoding: 8bit'; 

if(mail($destinataire,$sujet,$message,$headers))
{
	echo "L'email a bien été envoyé.";
}
else
{
	echo "Une erreur c'est produite lors de l'envoi de l'email.";
}
?>