
#include <iostream>
#include <thread>
#include <functional>
#include <numeric>
#include <chrono>


void delayer(std::function<void()> f, int ms)
{
    std::this_thread::sleep_for(std::chrono::microseconds(ms));
    f();
}

int main()
{
    constexpr int expectedTimeout = 2000;
    constexpr int simultaneous = 100;

    int results[simultaneous];
    std::thread threadPool[simultaneous];

    for (int i = 0; i < simultaneous; ++i)
    {
        auto beforeDelay = std::chrono::system_clock::now();

        auto f = [&results, i, beforeDelay]()
        {
            auto actualTimeout = std::chrono::system_clock::now() - beforeDelay;
            results[i] = actualTimeout.count() / 1000;
        };

        threadPool[i] = std::thread(delayer, f, expectedTimeout);
    }

    for (std::thread& thread : threadPool)
    {
        thread.join();
    }

    int average = std::accumulate(results, results + simultaneous, 0) / simultaneous;
    std::cout << "cpp\t|timer\t| Average delay between expected and real timeout is " << average - expectedTimeout << "ms" << std::endl;

    return 0;
}
