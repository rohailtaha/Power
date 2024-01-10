import { useCallback, useEffect, useRef } from 'react';

function useApiPoll(cb: (data: Record<any, any>) => void) {
  const intervalRef = useRef<number | null>(null);

  const fetchData = useCallback(async () => {
    // not fetched due to cors error
    const response = await fetch('http://2.233.121.120:1085/energy.php', {
      headers: {
        'Accept': '*/*',
      },
    });
    const data = await response.json();
    cb(data);
  }, [cb]);

  useEffect(() => {
    intervalRef.current = setInterval(fetchData, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fetchData]);

  return null;
}

export default useApiPoll;
