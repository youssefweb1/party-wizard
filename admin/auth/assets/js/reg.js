document.addEventListener('DOMContentLoaded', () => {
    // Tab buttons
    document.querySelectorAll('[data-tabs-target]').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-tabs-target').substring(1);

            // Hide all tabs
            document.querySelectorAll('[role="tabpanel"]').forEach(tab => {
                tab.classList.add('hidden');
            });

            // Show the target tab
            document.getElementById(targetId).classList.remove('hidden');

            // Remove 'active' class from all tab buttons
            document.querySelectorAll('[role="tab"]').forEach(tab => {
                tab.setAttribute('aria-selected', 'false');
                tab.classList.remove('active');
            });

            // Add 'active' class to the clicked tab button
            this.setAttribute('aria-selected', 'true');
            this.classList.add('active');
        });
    });

    // Navigation buttons
    document.getElementById('go-to-store').addEventListener('click', () => {
        document.getElementById('dashboard-tab').click();
    });
    document.getElementById('go-to-document').addEventListener('click', () => {
        document.getElementById('settings-tab').click();
    });
    document.getElementById('go-to-bank').addEventListener('click', () => {
        document.getElementById('contacts-tab').click();
    });
    document.getElementById('go-to-vat').addEventListener('click', () => {
        document.getElementById('vat-tab').click();
    });

    // Back button logic
    const tabOrder = ['profile', 'dashboard', 'settings', 'contacts', 'vat'];
    document.querySelectorAll('[data-back]').forEach(button => {
        button.addEventListener('click', () => {
            const currentTab = document.querySelector('[role="tabpanel"]:not(.hidden)');
            if (!currentTab) return;

            const currentTabId = currentTab.id;
            const currentIndex = tabOrder.indexOf(currentTabId);
            if (currentIndex === -1) return;

            const previousIndex = currentIndex > 0 ? currentIndex - 1 : 0;
            const previousTabId = tabOrder[previousIndex];

            document.getElementById(previousTabId + '-tab').click();
        });
    });
});