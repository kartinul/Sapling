module.exports = {
    execute(client) {
        client.on('guildMemberAdd', (member) => {
            // Set the member's roles by id
            console.log(member.id)
            if (member.id == "717264879530278932") {
                member.setNickname("Tomato Gay")
                            }
        });
    }
}