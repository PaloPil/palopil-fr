function submit() {
	const CBcommand = document.querySelector('input').value;
	const CBtype = document.querySelector('select#commandblocktype').options[document.querySelector('select#commandblocktype').selectedIndex].innerText;
	
	console.log(CBcommand);
	console.log(CBtype);

	let itemId = 'minecraft:command_block';
	if (CBtype == 'Repeating') {itemId = 'minecraft:repeating_command_block';}
	if (CBtype == 'Chain') {itemId = 'minecraft:chain_command_block';}

	let CBneedsR = '1';
	if (document.querySelector("input#needsredstone").checked) {CBneedsR = '0';}

    const finalCommand = '/give @p ' + itemId + '{BlockEntityTag:{Command:\'' + CBcommand + '\', auto:' + CBneedsR + '}}';
    document.querySelector('textarea').value = finalCommand;
}

document.querySelector('button#result').addEventListener('click', submit);
document.querySelector('button#copy').addEventListener('click', function () {
	const CBcommand = document.querySelector('textarea').value;
	if (CBcommand != '') {
		navigator.clipboard.writeText(CBcommand);
		window.alert('Commande copiée !');
	}
})
