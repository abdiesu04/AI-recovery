n, m = map(int, input().split())
h = list(map(int, input().split()))
q = [tuple(map(int, input().split())) for _ in range(m)]

f = [0] * n
b = [0] * n

for i in range(1, n):
    if h[i-1] > h[i]:
        f[i] = f[i-1] + (h[i-1] - h[i])
    else:
        f[i] = f[i-1]

for i in range(n-2, -1, -1):
    if h[i+1] > h[i]:
        b[i] = b[i+1] + (h[i+1] - h[i])
    else:
        b[i] = b[i+1]

rs = []
for s, t in q:
    if s < t:
        rs.append(f[t-1] - f[s-1])
    else:
        rs.append(b[t-1] - b[s-1])

for x in rs:
    print(x)
