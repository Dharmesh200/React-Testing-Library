const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Dharmesh",
                    last: "Waikar"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/59.jpg"
                },
                login: {
                    username: "Dharmesh200"
                }
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
