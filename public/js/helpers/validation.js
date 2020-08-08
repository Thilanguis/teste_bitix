/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/helpers/validation.js":
/*!********************************************!*\
  !*** ./resources/js/helpers/validation.js ***!
  \********************************************/
/*! exports provided: validaCamposFormulario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validaCamposFormulario", function() { return validaCamposFormulario; });
// import noty from 'noty';
var validaCamposFormulario = function validaCamposFormulario($campos) {
  var exibirNoty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  //Função auxiliar para validação de radios
  var validaRadioButton = function validaRadioButton(campo) {
    // Inicializando variável de controle
    var validado = false; // Recupera o nome do radio de seleção obrigatória

    var nomeCampo = campo.attr('name');
    var input = $('input[name="' + nomeCampo + '"]'); // Remove a cor de campo inválido

    input.parent().removeClass('radioInvalido'); //Se o status foi marcado ou o campo é invisível, passou na validação

    if (input.is(':checked') || !input.is(':visible')) {
      validado = true;
    } // Se o campo não for válido, adiciona a classe de campo inválido no elemento que encapsula o input radio


    if (!validado) input.parent().addClass('radioInvalido');
    return validado;
  }; //Função auxiliar para notificar o usuário do preenchimento obrigatório
  //e para focar a visualização no primeiro campo que não foi preenchido


  var handleValidation = function handleValidation() {
    var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var elemento = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
    new Noty({
      text: 'Preencha todos os campos obrigatórios',
      type: 'error',
      timeout: 4000
    }).show();

    if (scrollTop === true) {
      $('html, body').animate({
        scrollTop: $(elemento).offset().top - 30
      }, 1200);
    }
  }; //Inicializando variável de controle


  var vazio = 0;
  var validado = false;
  var camposInvalidos = []; //Nomeando funções para remoção das classes de campo inválido

  var removeRadioInvalido = function removeRadioInvalido(campo) {
    $(campo).on('change', function (_ref) {
      var currentTarget = _ref.currentTarget;

      if (currentTarget.checked) {
        // Recupera o nome do radio de seleção obrigatória
        var nomeCampo = $(currentTarget).attr('name');
        var input = $('input[name="' + nomeCampo + '"]'); // Remove a cor de campo inválido

        input.parent().removeClass('radioInvalido');
      }
    });
  };

  var removeCampoInvalido = function removeCampoInvalido(campo) {
    $(campo).on('change', function (_ref2) {
      var currentTarget = _ref2.currentTarget;

      if (currentTarget.value) {
        $(campo).removeClass('campoInvalido');
      }
    });
  }; //Verificando se existem campos para serem validados


  if ($campos.length > 0) {
    $campos.each(function () {
      // Remove a classe de campo inválido de cada campo, para limpar caso ela tenha sido inserida em validação anterior
      $(this).removeClass('campoInvalido'); // Se o campo for do tipo radio, faz a validação específica

      if ($(this).is(':radio')) {
        var radioValido = validaRadioButton($(this)); //se não foi validado, aumentamos o vazio

        if (!radioValido) {
          camposInvalidos.push(this);
          vazio++;
          removeRadioInvalido(this);
        }
      } // Se não faz a validação genérica, caso o campo esteja habilitado
      else if (!$(this).is(':disabled') && !$(this).is('[readonly]') && $(this).is(':visible')) {
          //Verifica se existe informação no campo informado
          var verificaCampo = $(this).val().trim().length; // Adiciona a classe de campo inválido, caso o campo seja selectize

          var isSelectize = function isSelectize(campo) {
            return $(campo).attr('class').indexOf('selectize') !== -1;
          };

          if (isSelectize(this)) {
            verificaCampo = $(this).siblings('select').val();
          } //Se o campo está vazio


          if (!verificaCampo || verificaCampo === 0) {
            // Adiciona a classe de campo inválido e incrementa vazio
            if (isSelectize(this)) {
              $(this).find('.selectize-input').addClass('campoInvalido');
            } else {
              $(this).addClass('campoInvalido');
            }

            camposInvalidos.push(this);
            vazio++;
            removeCampoInvalido(this);
          }
        }
    });
  } //Se não tiver campos vazios, passa na validação


  if (vazio === 0) {
    validado = true;
  } // Se os campos não forem válidos e a opção para exibir noty for verdadeira


  if (!validado && exibirNoty) handleValidation(true, camposInvalidos[0]);
  return validado;
};



/***/ }),

/***/ 1:
/*!**************************************************!*\
  !*** multi ./resources/js/helpers/validation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\teste_bitix\resources\js\helpers\validation.js */"./resources/js/helpers/validation.js");


/***/ })

/******/ });