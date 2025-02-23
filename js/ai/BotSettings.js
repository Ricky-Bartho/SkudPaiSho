function botSettingsHeaderClicked() {
	botSettingsClicked()
}

function botSettingsClicked() {
	// Get the modal content
	var msg = document.getElementById('botModalContentContainer').innerHTML;

	// Show the modal and use a callback to populate inputs
	showModal("Bot Settings", msg, false, null, false, function () {
			// Retrieve settings from localStorage
			const savedSettings = localStorage.getItem('botSettings');
			if (savedSettings) {
					const settings = JSON.parse(savedSettings);

					// Populate the input fields with saved values
					document.getElementById('depthInput').value = settings.depth || '';
					document.getElementById('threadsInput').value = settings.n_threads || '';
					document.getElementById('futilInput').checked = settings.futil || false;
					document.getElementById('nullInput').checked = settings.null || false;
					document.getElementById('quiesceInput').checked = settings.quiesce || false;
					document.getElementById('g5Input').checked = settings.quiesce || false;
			} else {
					// Clear fields if no settings are saved
					document.getElementById('depthInput').value = '';
					document.getElementById('threadsInput').value = '';
					document.getElementById('futilInput').checked = false;
					document.getElementById('nullInput').checked = false;
					document.getElementById('quiesceInput').checked = false;
					document.getElementById('g5Input').checked = false;
					
			}
	});
}

function sendSettingsToBot() {
	// Gather input values from the modal
	const settings = {
			depth: parseInt(document.getElementById('depthInput').value, 10) || 0,
			null: document.getElementById('nullInput').checked,
			quiesce: document.getElementById('quiesceInput').checked,
			g5: document.getElementById('g5Input').checked,
	};

	// Save settings to localStorage
	localStorage.setItem('botSettings', JSON.stringify(settings));
	console.log('Settings saved to localStorage:', settings);

	// Send the settings to the bot's endpoint
	fetch('http://localhost:7777/settings', {
			method: 'POST',
			headers: {
					'Content-Type': 'application/json',
			},
			body: JSON.stringify(settings),
	})
	.then((response) => {
			if (response.ok) {
					closeModal()
					alert('Settings saved successfully!');
			} else {
					alert('Failed to save settings. Please try again.');
			}
	})
	.catch((error) => {
			console.error('Error:', error);
			alert('An error occurred while sending the settings.');
	});
}