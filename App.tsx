import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [output, setOutput] = useState<string[]>([]);
  const numbers: number[] = [2, 4, 6, 8, 10];

  const runFor = (): void => {
    const Lines: string[] = [];
    for (let i = 0; i < numbers.length; i++) {
      Lines.push(`for: i=${i} -> ${numbers[i]}`);
    }
    setOutput(Lines);
  };

  return (
    <View style={styles.container}>
      <Text>🔁Loop Di Loop</Text>

      <View>
        <Button title="Start Loop" onPress={runFor} />

        {output.length === 0 ? (
          <Text>Output will appear over here</Text>
        ) : (
          output.map((line, i) => <Text key={i}>{line}</Text>)
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 15,
  },
  heading: {
    fontSize: 65,
    fontWeight: 'bold',
  },
});