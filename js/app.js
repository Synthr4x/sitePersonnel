// Création du module angular correspondant à notre application
//var app = angular.module('portfolio', ['ngRoute']);
var app = angular.module('portfolio', ['ngSanitize']);

/**
 *	Configuration des routes de notre application
 *
 */
/**app.config(function($routeProvider) {
 $routeProvider.when('/home', {
 templateUrl: 'partials/home.html'
 }).when('/about', {
 templateUrl: 'partials/about.html'
 }).when('/statistiquesSession', {
 templateUrl: 'partials/statistiquesSession.html'
 }).otherwise({
 redirectTo: '/home'
 });
 });*/

app.factory('Global', function() {
	return {
		map : null,
		location : null

	};
});

/**
 *	 Controller principal de l'application.
 *
 */
app.controller('AppControler', function($scope) {

	$("#menu-close").click(function(e) {
		e.preventDefault();
		$("#sidebar-wrapper").toggleClass("active");
	});
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$("#sidebar-wrapper").toggleClass("active");
	});
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop : target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	$scope.langFR = {
		title : "Bienvenue sur ma page personelle !",
		menu : {
			category : "Catégories",
			home : "Acceuil",
			formation : "Formation et parcours",
			skills : "Compétences",
			projects : "Projets",
			complements : "Compléments",
			contact : "Contact"
		},

		formation : {
			title : "Mon parcours personnel, professionnel, et ma formation."
		},

		calloutText : "Ce que je sais faire.",

		skills : {
			title : "Mes compétences",
			web : {
				title : "Développement Web",
				text : "Expérience dans les technologies Web tels que JQuery, HTML5, JEE, PHP ou encore Ajax. Utilisation de frameworks modernes comme Symfony et Angular.js."
			},
			db : {
				title : "Bases de<br>données",
				text : "Connaissance approfondie des bases de données SQL avec PhpMyAdmin, expérience dans le JPQL (JEE) ainsi que le XQuery pour des sites web utilisant XSL."
			},
			desktopDevelopment : {
				title : "Développement logiciel",
				text : "Développement de nombreux projets en Java utilisant les librairies Swing et Socket, mais aussi des projets en C, C#, C++, Python, VBA/VBS, etc... Connaissance également des patrons de conception majeures comme MVC, ou les patrons du \"Gang of Four\"."
			},
			OS : {
				title : "Systèmes d'exploitation",
				text : "Expérience de travail sous Linus et Bash (javax, gcc, programmation C bas niveau), gestion d'un serveur Debian Wheezy. Développement d'applications sur Android et IOs utilisant Phonegap/Cordova."
			},
			lang : {
				title : "Langues",
				text : "Bilingue anglais et français, notions de Russe (mère Russe) et de Japonais appris à l'Université.",
				english : "Anglais",
				french : "Français",
				russian : "Russe",
				japanese : "Japonais"
			}
		},

		projects : {
			title : "Mes projets",
			runBelievable : {
				title : "Application mobile sur Android et IOs",
				text : "Développement d'une application mobile sur smartphones Android et Apple en utilisant Cordova/Phonegap à destination des sportifs pour le suivi et la planification de sessions sportives comme la course."
			},
			sponsorboost : {
				title : "Stage à SponsorBoost",
				text : "Dans le cadre du stage à l'IUT, je fais le mien à SponsorBoost, une start-up de publicité en ligne en tant que développeur web avec un camarade de promotion. J'y apporterais des améliorations au site existant ainsi que développer une nouvelle mouture de ce dernier en utilisant des technologies web plus modernes et plus performantes. Celui-ci sera développé grâce à un framework MVC en PHP développé par nos soins (mon collègue et moi), ainsi qu'avec JQuery, Ajax et Bootstrap."
			}
		},

		complements : {
			title : "Compléments",
			downloadCV : "Téléchargez mon CV en anglais ou en français.",
			englishDownloadlLabel : "Anglais",
			frenchDownloadLabel : "Français",
			poweredByText : "Ce site à été crée grâce à Bootstrap et utilise Angular.js, Ajax, et PHP. Si vous avez des remarques ou idées d'amélioration n'hésitez surtout pas à m'écrire un commentaire grâce au bouton ci-dessous!",
			writeMessage : "Ecrire un commentaire "
		},

		contact : {
			title : "Contact",
			mailContact : "Vous pouvez me joindre par e-mail sur ",
			socialContact : "retrouvez moi aussi sur Facebook Twitter, Google+ et LinkedIn!",
			footer : "Site crée et maintenu par Christian Pavinich - 2014"
		}
	};

	$scope.langEN = {
		title : "Welcome to my personnal Website !",
		menu : {
			category : "Categories",
			home : "Home",
			formation : "Journey and Formation",
			skills : "Skills",
			projects : "Projects",
			complements : "Complements",
			contact : "Contact"
		},

		formation : {
			title : "My personnal and professionnal journey, and my formation"
		},

		calloutText : "What I can do.",

		skills : {
			title : "My Skills",
			web : {
				title : "Web Development",
				text : "Experience in web technologies like JQuery, HTML5, JEE, PHP and Ajax. Use of modern frameworks like Symfony and Angular.js."
			},
			db : {
				title : "DataBases",
				text : "Advanced knowledge of SQL databases with PhpMyAdmin, experience with JPQL (JEE) and also with XQuery for XSL using sites."
			},
			desktopDevelopment : {
				title : "Software programming",
				text : "Development of a large number of Java projects using the Swing and Socket librairies, but also projects using C, C#, C++, Python, VBA/VBS, etc... Knowledge of major Design Paterns like MVC, ou the patterns of the \"Gang of Four\""
			},
			OS : {
				title : "Operating Systems",
				text : "Work experience using Linux and Bash (javax, gcc, low level C programming), administration of a Debian Wheezy server. Development of Android and IOs applications using Phonegap/Cordova."
			},
			lang : {
				title : "Languages",
				text : "Fluent in English and French, notions in Russian (Russian mother) and Japanese learned in University.",
				english : "English",
				french : "French",
				russian : "Russian",
				japanese : "Japanese"
			}
		},

		projects : {
			title : "My projects",
			runBelievable : {
				title : "Mobile application on Android and IOs",
				text : "Development of a mobile application on Android and Apple smartphones using Cordova/Phonegap for sportsmen for the monitoring and planification of sport sessions like running."
			},
			sponsorboost : {
				title : "Internship at SponsorBoost",
				text : "In the context of my IUT internship, I did mine at SponsorBoost, an online advertising startup as a Web Developper with a collegue of my promotion. I would enhance the existing website, and also develop a new version of this one using more modern and performant web technologies. This project was developped using our own MVC framework that we developped (my collegue and I), and with JQuery, Ajax and Bootstrap."
			}
		},

		complements : {
			title : "Complements",
			downloadCV : "Download my French or English CV.",
			englishDownloadlLabel : "English",
			frenchDownloadLabel : "French",
			poweredByText : "This Website is powered by Bootstrap, Angular.js, Ajax and PHP. If you have any comments or ideas to help me make this website better, please de not hesitate to send me a message right below !",
			writeMessage : "Send a comment"
		},

		contact : {
			title : "Contact",
			mailContact : "You can reach me on my e-mail on",
			socialContact : "Catch me also on Facebook, Twitter, Google+ and LinkedIn !",
			footer : "Website created and maintained by Christian Pavinich - 2014"
		}
	};

	$scope.changeDemo = function(type, is_mobile, fr) {
		$('#timeline').remove();
		var wrapper = $('<div>').attr('id', 'timeline').appendTo($('#parcours'));

		if (is_mobile) {
			wrapper.addClass('mobile');
		}

		var timeline_data = [];
		var options = {};

		$('#timeline').addClass('demo' + type);

		switch (type) {
			case 1:
				timeline_data = [{
					type : 'blog_post',
					date : '1991-04-03',
					title : 'Naissance',
					image : "img/akron.jpg",
					content : 'Né à Akron Ohio aux Etats-Unis'
				}, {
					type : 'blog_post',
					date : '1995-09-01',
					title : 'Entrée à l\'école catholique St Sebastian',
					content : 'C\'est en entrant dans une école catholique que je comprends que ma passion, c\'est les sciences !',
					image : 'img/stSebastian.jpg'
				}, {
					type : 'blog_post',
					date : '1995-09-01',
					image : 'img/piano.jpg',
					title : 'Premières leçons de piano',
					content : 'C\'est à cette époque que je commence mes premières leçons de piano.',
				}, {
					type : 'blog_post',
					date : '2000-12-01',
					title : 'Déménagement à Nice',
					content : 'Suite au divorce de mes parents en 1999 je déménage à Nice avec ma mère.',
					image : 'img/baieDesAnges.jpg'
				}, {
					type : 'blog_post',
					date : '2004-09-01',
					title : 'Entrée au collège Roland Garros',
					content : 'J\'ai la chance d\'intégrer le programme d\'horaires aménagées du collège Roland Garros avec le concervatoire de Nice.',
					image : 'img/rolandGarros.jpg',
				}, {
					type : 'blog_post',
					date : '2004-09-01',
					title : 'Entrée au Concervatoire de Nice',
					content : 'Grâce au programme d\'horaires aménagées j\'ai eu l\'opportunité d\'être un élève au concervatoire de Nice.',
					image : 'img/concervatoire.jpg',
				}, {
					type : 'blog_post',
					date : '2007-09-01',
					title : 'Entrée au Lycée Estienne D\'Orves',
					image : 'img/estiennneDorves.jpg',
				}, {
					type : 'blog_post',
					date : '2010-07-07',
					title : 'Obtention du Baccalauréat',
					content : 'Obtention en 2010 du Baccalauréat Scientifique spécialité Mathématiques avec mention assez bien.',
					image : 'img/bac.jpg',
				}, {
					type : 'blog_post',
					date : '2010-09-01',
					title : 'Entrée à l\'IUT de Nice',
					content : 'Je commence enfin mon initiation aux métiers de l\'informatique, à l\'IUT Informatique de Nice.',
					image : 'img/iut.jpg',
					readmore : 'http://www.iut.unice.fr/formations/fiche/id/11_dut-informatique'
				}, {
					type : 'blog_post',
					date : '2012-04-08',
					title : 'Stage à SponsorBoost',
					content : 'Dans le cadre du stage à l\'IUT, j\'ai fait le mien à SponsorBoost, une start-up de publicité en ligne en tant que développeur web avec un camarade de promotion. J\'y apporterais des améliorations au site existant ainsi que développerais une nouvelle mouture de ce dernier en utilisant des technologies web plus modernes et plus performantes.<br>Celui-ci sera développé grâce à un framework MVC en PHP développé par nos soins (mon collègue et moi), ainsi qu\'avec JQuery, Ajax et Bootstrap. Ce stage sera suivi d\'une courte embauche qui n\'a malheuresement pas pu durer suite à la reprise de mes études juste après.',
					image : 'img/sponsorboost.jpg',
					readmore : 'http://www.sponsorboost.com/'
				}, {
					type : 'blog_post',
					date : '2012-09-01',
					title : 'Entrée à Polytech\' Nice en SI3',
					content : "Ayant été bien classé à l'IUT de Nice avec la meilleure note au Jury pour le stage, et étant 9ème au classement Informatique ainsi que 11ème au classement des matières générales. Je décide de rentrer à Polytech' Nice à Sophia Antipolis pour poursuivre mes études dans le but de devenir Ingénieur en Informatique.",
					image : 'img/polytech.png',
					readmore : 'http://www.polytechnice.fr/'
				}, {
					type : 'iframe',
					date : '2012-12-06',
					title : 'Nuit de l\'informatique 2012',
					content : "Avec des anciens de promotion de l'IUT de Nice, nous décidons de participer à la nuit de l'informatique 2012. Cet évènement consiste à rassembler une équipe de développeurs pendant une soirée et une nuit afin de remporter des défis de programmation en respectant un thème. Cette année le thème était le patrimoine français, et avec une dizaine des 30 membres de l'équipe j'ai pu diriger l'équipe de développement du défi Processing (Java).",
					url : '//www.youtube.com/embed/Jy-m6jGqYfs',
				}, {
					type : 'blog_post',
					date : '2011-05-15',
					title : 'Obtention du certificat Voltaire',
					content : "Pendant mes études à l'IUT j'obtiens ma certification Voltaire attestant de mon niveau en Français.",
					image : 'img/voltaire.png',
					width : 300,
					height : 300,
					readmore : 'http://www.certificat-voltaire.fr/'
				}, {
					type : 'blog_post',
					date : '2013-09-17',
					title : 'Entrée à Miage en M1',
					content : "Ayant été déçu de la formation de Polytech' Nice et de l'aperçu de ce que pouvait être le métier d'Ingénieur en Informatique, je décide de me réorienter dans la formation Miage se trouvant également à Sophia Antipolis. Cette formation correspond plus à la vision que je me fais du métier d'informaticien, plus porté sur le développement et la théorie Informatique ainsi que la gestion d'entreprise.",
					image : 'img/miage.jpg',
					readmore : 'http://miage.unice.fr/'
				}];
				options = {
					animation : true,
					lightbox : true,
					showYear : true,
					showTitle : true,
					allowDelete : false,
					columnMode : 'dual'
				};
				break;
			case 2:
				timeline_data = [{
					type : 'blog_post',
					date : '2011-09-03',
					title : 'FA Cup',
					width : 300,
					content : 'The Reds go marching on in the FA Cup...',
					image : 'images/facup.jpg'
				}, {
					type : 'blog_post',
					date : '2011-08-03',
					title : 'Swansea',
					width : 300,
					content : 'Check out our exclusive video preview ahead of today\'s clash with Swansea <a href="http://bit.ly/Yz0bmZ" target="_blank">http://bit.ly</a>',
					image : 'images/rio.jpg'
				}, {
					type : 'blog_post',
					date : '2011-07-15',
					title : 'Manchester United VS Liverpool',
					width : 300,
					content : 'The Reds complete the double over Liverpool this season...',
					image : 'images/evra.jpg'
				}, {
					type : 'blog_post',
					date : '2011-06-29',
					title : 'Michael Carrick',
					width : 300,
					content : 'Last chance to win Michael Carrick\'s signed shirt from the Liverpool game!! Click this link to enter <a href="http://bit.ly/W03U8k" target="_blank">http://bit.ly</a>',
					image : 'images/carric.jpg'
				}, {
					type : 'blog_post',
					date : '2011-04-02',
					title : 'Match',
					width : 300,
					content : '9 Premier League wins out of 10 this season at Old Trafford. What is your match of the season so far at the Theatre of Dreams?',
					image : 'images/wigan.jpg'
				}, {
					type : 'blog_post',
					date : '2011-02-13',
					title : 'Old Traffordt',
					width : 300,
					content : 'Check out our exclusive video preview ahead of today\'s clash with Swansea <a href="http://bit.ly/Yz0bmZ" target="_blank">http://bit.ly</a>',
					image : 'images/home.jpg'
				}];
				options = {
					animation : true,
					lightbox : true,
					showYear : true,
					allowDelete : false,
					columnMode : 'dual'
				};
				break;
		}

		var timeline = new Timeline($('#timeline'), timeline_data, fr);
		timeline.setOptions(options);
		timeline.display();
	};

	$scope.lang = $scope.langFR;
	$scope.changeDemo(1, 10, true);

});
