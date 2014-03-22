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

	$scope.lang = $scope.langFR;
	$scope.fr = true;

	/**createStoryJS({
		type : 'timeline',
		height : '600',
		source : 'https://docs.google.com/spreadsheet/pub?key=0Avt_48Rr2t_4dEJZVVV3ZjRRR2lWTzVHVWhDYTBlZEE&output=html',
		embed_id : 'timelineEN',
		lang : "en"
	});

	/**createStoryJS({
	 type : 'timeline',
	 height : '600',
	 source : 'https://docs.google.com/spreadsheet/pub?key=0Avt_48Rr2t_4dFRiRXNyN1JGVFFNMkdNaXV1WmItWkE&output=html',
	 embed_id : 'timelineFR',
	 lang : "fr"
	 });*/

});
