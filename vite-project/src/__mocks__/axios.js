const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Dharmesh",
                    last: "Waikar"
                },
                picture: {
                    large: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSqKuVvlbxGMi9XNOucHAgBFfpmzDGPVVl8_uxIMndHB08AZpWrPvLS9p60YtYNKwPUUuvYi6hA9D8k_fs"
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
