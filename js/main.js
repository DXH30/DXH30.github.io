const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const search = document.querySelector('#search')
const help = document.querySelector('#help')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const searchContent = document.querySelector('#search-content')
const helpContent = document.querySelector('#help-content')
const cursor = document.querySelector('.cursor');
const command = document.querySelector('#command')

window.addEventListener('keydown', function(e) {
    if (command.innerText.length < 30) {
        cursor.style.color = "green";
        if (e.key == 'Backspace') {
            var length = command.innerText.length;
            command.innerText = command.innerText.slice(0, length - 1);
        } else if (e.key == 'Enter') {
            processCommand(command.innerText);
            command.innerText = "";
        } else if (e.key.length > 1) {
            command.innerText = command.innerText;
            console.log(e.key + " Pressed");
        } else {
            command.innerText = command.innerText + e.key;
        }
    } else {
        cursor.style.color = "red";
        if (e.key == 'Backspace') {
            var length = command.innerText.length;
            command.innerText = command.innerText.slice(0, length - 1);
        } else if (e.key == 'Enter') {
            processCommand(command.innerText);
            command.innerText = "";
        }
    }
});

function processCommand(command) {
    switch(command) {
        case "/about":
            openAbout();
            break;
        case "/contact":
            openContact();
            break;
        case "/search":
            openSearch();
            break;
        case "/help":
            openHelp();
            break;
	case "/exit":
	    closeAllWindow();
	    break;
        default:
            commandNotFound(command);
            break;
    }
}

function closeAllWindow() {
    var allWindow = document.querySelectorAll('.my-window');
    allWindow.forEach(function(item) {
        item.remove();
    });
}

function commandNotFound(command) {
    console.log(command+"Command not found")
}

function openAbout() {
    const aboutBox = new WinBox({
        title: 'About Me',
	id: 'about-window',
	class: 'my-window',
        // modal: true,
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
    });
}

function openContact() {
    const contactBox = new WinBox({
        title: 'Contact Me',
	id: 'about-window',
	class: 'my-window',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: contactContent,
        onfocus: function () {
          this.setBackground('#00aa00')
        },
        onblur: function () {
          this.setBackground('#777')
        },
    })
}

function openSearch() {
    const searchBox = new WinBox({
        title: 'Search',
	id: 'about-window',
	class: 'my-window',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: searchContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#999')
        }
    })
}

function openHelp() {
    const helpBox = new WinBox({
        title: 'Help',
	id: 'about-window',
	class: 'my-window',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: helpContent,
        onfocus: function() {
            this.setBackground('#00aa00')
        },
        onblur: function() {
            this.setBackground('#999')
        }
    })
}

about.addEventListener('click', () => openAbout());

contact.addEventListener('click', () => openContact());

help.addEventListener('click', () => openHelp());
