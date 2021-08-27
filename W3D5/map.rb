class Map

    attr_reader :array

    def initialize
        @array = []
    end

    def set(key, value)
        pair_idx = @array.index { |pair| pair[0] == key }
        if pair_index
            @array[pair_idx][1] = value
        else
            @array.push([key, value])
        end
    end

    def get(key)
        @array.each { |pair| return pair[1] if pair[0] == key }
    end

    def delete(key)
        val = get(key)
        @array.reject! { |pair| pair[0] == key }
    end

    def show
        deep_dup(array)
    end

    def deep_dup(array)
        array.map { |el| el.is_a?(Array) ? deep_dup(el) : el }
    end
end