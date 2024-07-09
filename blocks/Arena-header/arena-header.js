document.addEventListener("DOMContentLoaded", function() {
    // Create header-parent div
    const headerParent = document.createElement('div');
    headerParent.className = 'header-parent';

    // Create header-logo div
    const headerLogo = document.createElement('div');
    headerLogo.className = 'header-logo';
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    logoLink.textContent = 'CodingLab';
    headerLogo.appendChild(logoLink);

    // Create header-list div
    const headerList = document.createElement('div');
    headerList.className = 'header-list';
    const ul = document.createElement('ul');

    // List items
    const navItems = ['Home', 'About', 'Services', 'Contact', 'Feedback'];
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = item;
        li.appendChild(a);
        ul.appendChild(li);
    });

    headerList.appendChild(ul);

    // Append logo and list to header-parent
    headerParent.appendChild(headerLogo);
    headerParent.appendChild(headerList);

    // Append header-parent to body
    document.body.appendChild(headerParent);
});